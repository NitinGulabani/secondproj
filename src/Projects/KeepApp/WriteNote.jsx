import react, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const WriteNote = (props) => {

    const[note,setNote] = useState({
        title : '',
        content : ''
    })

    const getInputValue = (InputValue) => {
        const {name,value} = InputValue.target;
        setNote((prevVal) => {
            
            return{
                ...prevVal,
                [name] : value
            }
        })
    }
    
    const addNote = () => {
        if(note.title == '' && note.content =='')
        {
            
        }else{
            props.addNote(note);
            setNote({
                title : '',
                content : ''
            })
        }
    }
    

    return (
        <>
            <form>
            <div className="WriteNoteBox m-auto my-4">
                <input type="text" className="title" onChange={getInputValue} name="title" placeholder="Title:"  value={note.title} autoComplete="off"/>

                <textarea autoComplete="off" placeholder="Make a note." onChange={getInputValue} name = "content" className="note" cols="40" rows="4" value={note.content}></textarea>

                <Button onClick={addNote} className="add" style={{borderRadius:'100%',width:'10%',height:'35%',backgroundColor:'rgb(252,188,20)'}} variant="contained" color="">
                    <AddIcon className="add-icon"/>
                </Button>               
            </div>
            </form>
        </>
    )
}

export default WriteNote;