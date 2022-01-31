import React, { useContext } from 'react';
import noteContext from '../Context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const context = useContext(noteContext);
    const { notes, setnotes } = context;
    return <div>
        <h1 className="my-3">Your Notes</h1>
        <div className="row my-3">
            {notes.map((note) => { return <Noteitem key={note._id} note={note} /> })}
        </div>
    </div>;
};

export default Notes;
