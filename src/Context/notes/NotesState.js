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
    const note = await response.json()
    //Logic to Add in client
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
    // eslint-disable-next-line
    const json = await response.json()
    //Removing note from frontend
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
    // eslint-disable-next-line
    const json = await response.json()

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