import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [credentials, setcredentials] = useState({email:"",password:""})
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email , password: credentials.password })
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
              //save authtoken to local storage and redirect to home
              localStorage.setItem('token', json.authtoken)
              navigate("/")
          }
          else{
             alert("Enter Correct Credentials")
          }
    }

    const onChange = (e) => {
        setcredentials({...credentials , [e.target.name]: e.target.value})
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={credentials.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" onChange={onChange} value={credentials.password} />
                </div>
                <button disabled={credentials.password.length<5} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login