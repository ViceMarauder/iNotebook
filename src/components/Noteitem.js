import React,{ useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-regular-svg-icons';
import noteContext from '../Context/notes/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deletenote } = context;
    const { note,updateNote } = props;
    return <div className="col-md-3">
        <div className="card my-3">
            <div className="card-body">
                <div className="d-flex align-items-center">
                    <h5 className="card-title">{note.title}</h5>
                    <FontAwesomeIcon icon={faTrashAlt} className="mx-2" role="button" onClick={()=>{deletenote(note._id); props.showAlert("Note deleted successfullly", "success");}}/>
                    <FontAwesomeIcon icon={faEdit} className="mx-2" role="button" onClick={()=>{updateNote(note)}} />
                </div>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    </div>;
};

export default Noteitem;
