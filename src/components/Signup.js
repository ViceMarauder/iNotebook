import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [newuserdata, setnewuserdata] = useState({ name: "", email: "", password: "", cpassword: "" })
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: newuserdata.name, email: newuserdata.email, password: newuserdata.password, cpassword: newuserdata.cpassword })
        });
        const json = await response.json()
        console.log(json)
        if (json.success) {
            //save authtoken to local storage and redirect to home
            localStorage.setItem('token', json.authtoken)
            navigate("/")
        }
        else {
            alert(json.error)
        }
    }

    const onChange = (e) => {
        setnewuserdata({ ...newuserdata, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" id="name" value={newuserdata.name} onChange={onChange} minLength={3} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={newuserdata.email} onChange={onChange} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={newuserdata.password} onChange={onChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name="cpassword" id="cpassword" value={newuserdata.cpassword} onChange={onChange} minLength={5} required />
                </div>
                <button disabled={newuserdata.password.length<5 || newuserdata.cpassword.length<5 || newuserdata.name.length<3} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup