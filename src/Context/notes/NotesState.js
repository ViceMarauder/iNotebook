import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) =>{
    const s1 = {
        "name": "Chirayu",
        "class": "12-A"
    }
    const [state, setstate] = useState(s1);
    const update = () =>{
        setTimeout(()=>{
            setstate({
                "name": "Chirayu Pant",
                "class": "12-A"
            })
        },1000)
    }
    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;