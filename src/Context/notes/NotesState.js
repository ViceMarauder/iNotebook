// eslint-disable-next-line
import React,{ useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) =>{
    const notesInitial = [
        {
            "_id": "61f6a25779471ec8af8a1a2f",
            "user": "61e2db36670adafcea168b90",
            "title": "My First Note",
            "description": "This is my first note",
            "tag": "first note",
            "date": "2022-01-30T14:36:07.405Z",
            "__v": 0
          },
          {
            "_id": "61f6a25c79471ec8af8a1a31",
            "user": "61e2db36670adafcea168b90",
            "title": "My First Note1",
            "description": "This is my first note1",
            "tag": "first note",
            "date": "2022-01-30T14:36:12.240Z",
            "__v": 0
          },
          {
            "_id": "61f6a26379471ec8af8a1a33",
            "user": "61e2db36670adafcea168b90",
            "title": "My First Note2",
            "description": "This is my first note2",
            "tag": "first note",
            "date": "2022-01-30T14:36:19.909Z",
            "__v": 0
          },
          {
            "_id": "61f6a26a79471ec8af8a1a35",
            "user": "61e2db36670adafcea168b90",
            "title": "My First Note3",
            "description": "This is my first note3",
            "tag": "first note",
            "date": "2022-01-30T14:36:26.862Z",
            "__v": 0
          },
          {
            "_id": "61f6a27279471ec8af8a1a37",
            "user": "61e2db36670adafcea168b90",
            "title": "My First Note",
            "description": "This is my first note",
            "tag": "first note",
            "date": "2022-01-30T14:36:34.290Z",
            "__v": 0
          }
    ]
    const [notes, setnotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;