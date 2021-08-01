import react, { useState } from 'react';
import './KeepApp.css';
import Header from './Header';
import Footer from './Footer';
import DisplayNote from './DisplayNote';
import WriteNote from './WriteNote';
import Notes from './Notes';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';

const KeepApp = () => {

    const [addNoteList,setAddNoteList] = useState([]);
    const [displayNoteState,setDisplayNoteState] = useState(false);
    const [displayBulb,setDisplayBulb] = useState(false);

    const addNote = (note) => {
       setAddNoteList((prevData) => {
            return[...prevData,note];
       })
       console.log();
    } 

    const deleteNote = (id) => {
        setAddNoteList((prevData) => {
            prevData.splice(id,1);
            return [...prevData];
        })
    }

    const setNoteState = () => {
        setDisplayNoteState(!displayNoteState);
    }
    return (
        <>
            <Header/>
            {(displayNoteState ? <div onDoubleClick={setNoteState}><WriteNote addNote = {addNote}/></div> : <div onClick={setNoteState}> <DisplayNote/></div>)}
            
            <div className="container">
                <div className="row">
                    {addNoteList.map((val,index) => {
                        return <Notes 
                            id = {index}
                            title = {val.title}
                            content = {val.content}
                            deleteNote = {deleteNote}
                         />
                    })}
                </div>
            </div>
            {/* <Footer/> */}
            {(addNoteList.length == 0) ? <div className="emptyNoteIcon d-flex align-items-center flex-column"><NoteOutlinedIcon style={{fontSize:'100px',color:'#80868bc2'}}/><h4 style={{color:'#80868bc2'}}>Notes you add appear here</h4></div> : ''}
        </>
    )
}

export default KeepApp;