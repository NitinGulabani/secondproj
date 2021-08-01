import react from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';;

const ListOfNotes = ({id,title,note}) => {
    return (
        <>
            <div className="col-md-3">
                <div className="ListOfNoteBox m-auto my-4">
                    <h2>{title}</h2>  
                    <p>{note}</p> 
                    <button className="delete">                        
                        <DeleteIcon className="delete-icon"/> 
                    </button>
                </div>
            </div>
        </>
    )
}

export default ListOfNotes;