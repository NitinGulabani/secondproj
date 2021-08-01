import react from 'react';
import ListOfNotes from './ListOfNotes';
import DeleteIcon from '@material-ui/icons/Delete';;

const Notes = (props) => {

    const deleteNote = () => {
        props.deleteNote(props.id);
    }

    return (
        <>
            <div className="col-md-3">
                <div className="ListOfNoteBox m-auto my-4">
                    <h2>{props.title}</h2>  
                    <p>{props.content}</p> 
                    <button className="delete" onClick={deleteNote}>                        
                        <DeleteIcon className="delete-icon"/> 
                    </button>
                </div>
            </div>
        </>
    )
}

export default Notes;