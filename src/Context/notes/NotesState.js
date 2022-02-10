// eslint-disable-next-line
import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setnotes] = useState(notesInitial);
  //GET all notes
  const getnotes = async () => {
    //TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmRiMzY2NzBhZGFmY2VhMTY4YjkwIn0sImlhdCI6MTY0NDUwNDUwM30.-9S2pXQGVioAnZgVlK7ub0HG6LXusmU9NTaAr_NsrVU'
      },
    });
    const json = await response.json()
    console.log(json)
    setnotes(json)
  }
  //Add a Note
  const addnote = async (title, description, tag) => {
    //TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmRiMzY2NzBhZGFmY2VhMTY4YjkwIn0sImlhdCI6MTY0NDUwNDUwM30.-9S2pXQGVioAnZgVlK7ub0HG6LXusmU9NTaAr_NsrVU'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    console.log(json)
    //Logic to Add in client
    console.log("Adding a new note");
    const note = {
      "_id": "61f6a27279471ec8af8a1a3733",
      "user": "61e2db36670adafcea168b90",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-01-30T14:36:34.290Z",
      "__v": 0
    };
    setnotes(notes.concat(note))
  }
  //Delete a note
  const deletenote = async (id) => {
    //TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmRiMzY2NzBhZGFmY2VhMTY4YjkwIn0sImlhdCI6MTY0NDUwNDUwM30.-9S2pXQGVioAnZgVlK7ub0HG6LXusmU9NTaAr_NsrVU'
      },
    });
    const json = await response.json()
    console.log(json)
    //Removing note from frontend
    console.log("Deleting the note with id " + id);
    const newnotes = notes.filter((note) => { return note._id !== id })
    setnotes(newnotes)
  }
  //Edit a note
  const editnote = async (id, title, description, tag) => {
    //TODO: API Call
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlMmRiMzY2NzBhZGFmY2VhMTY4YjkwIn0sImlhdCI6MTY0NDUwNDUwM30.-9S2pXQGVioAnZgVlK7ub0HG6LXusmU9NTaAr_NsrVU'
      },
      body: JSON.stringify({ title, description, tag })
    });
    const json = await response.json()
    console.log(json)

    let newNotes = JSON.parse(JSON.stringify(notes))
    //Logic to Edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index]
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setnotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote, getnotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;