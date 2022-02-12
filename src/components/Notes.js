import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from '../Context/notes/noteContext';
import AddNote from './AddNote';
import Noteitem from './Noteitem';

const Notes = (props) => {
    const context = useContext(noteContext);
    const { notes, getnotes, editnote } = context;

    useEffect(() => {
        getnotes();
        // eslint-disable-next-line
    }, [])

    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click()
        setnote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const handleClick = (e) => {
        refClose.current.click()
        editnote(note.id, note.etitle, note.edescription, note.etag);
        props.showAlert("Updated successfully","success")
    }

    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })
    }

    return <>
        <AddNote showAlert={props.showAlert}/>

        <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} minLength={5} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Tag</label>
                                <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="btn btn-primary">Update Note</button>
                    </div>
                </div>
            </div>
        </div>
        <h1 className="my-3">Your Notes</h1>
        <div className="row my-3">
            <div className="container my-3 mx-3">
                {notes.length === 0 && 'No Notes to Display'}
            </div>
            {notes.map((note) => { return <Noteitem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} /> })}
        </div>
    </>;
};

export default Notes;
