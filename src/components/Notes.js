import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import AddNote from './addNote';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, addnote } = context;
    return <>
        <AddNote/>
        <h1 className="my-3">Your Notes</h1>
        <div className="row my-3">
            {notes.map((note) => { return <Noteitem key={note._id} note={note} /> })}
        </div>
    </>;
};

export default Notes;
