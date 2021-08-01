import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import './todoWithUi.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Height } from '@material-ui/icons';

var array = ['a','b'];

const TodoWithUi = (prop) => {
    
    var [getInputValue,setInputValue] = useState('');
    var [item,listOfItems] = useState([]);
    var [isTaskDone,setIsTaskDone] = useState([]);

    const inputField = (input) =>{
        setInputValue(input.target.value);
    }

    const addItemsToList = () => {
        listOfItems((oldData) => {
            if(getInputValue == ''){
                return [...oldData];
            }
            return [...oldData,getInputValue];
        });

        setInputValue('');
    }

    const deleteItemsFromList = (index) => {
        listOfItems((oldData1) => {
            oldData1.splice(index,1);
            return [...oldData1];
        });
        setIsTaskDone((oldData) => {
            var index1 = oldData.indexOf(index);
            oldData.splice(index1,1);
            return [...oldData];
        })
    }

    const taskDone = (index) => {
        setIsTaskDone((oldData) => {
            if(oldData.includes(index))
            {
                return [...oldData];
            }else{

                return [...oldData,index];
            }
        })
    }
    console.log(isTaskDone);

    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="box">
                <div className="container-fluid">
                    <h1 className="heading text-center mt-3">ToDo List</h1>

                    <div className="row overflow-auto">
                        <div className="col-8 text-center">
                            <input type="text" name="item" placeholder="Add Items"
                            onChange={inputField} value={getInputValue}></input>
                        </div>
                        <div className="col-4 text-start">
                            <Button style={{borderRadius:'100%'}} variant="contained" color="secondary" className="add" onClick={addItemsToList}>
                                <AddIcon/>
                            </Button>
                        </div>
                    
                            {item.map((itemVal,index) => {
                            return (
                                <>
                                <div className="main-content d-flex align-items-center">
                                    <div className="col-7 taskName d-flex align-items-center">
                                            <h4 className="mt-3 me-4" style={{textDecoration: isTaskDone.includes(index) ? 'line-through' : 'none'}}>{itemVal}</h4>
                                    </div>
                                    <div className="col-5 d-flex align-items-center">
                                        <button title="Delete" style={{marginTop:'7px',borderRadius:'100%'
                                        ,backgroundColor:'rgb(209, 35, 35)'}} onClick={() => {deleteItemsFromList(index)}} className="cancel">
                                            <DeleteIcon style={{ color:'white',fontSize:'25px'}}/>
                                        </button>

                                        <button title="Task Done" style={{marginTop:'7px',borderRadius:'100%',marginLeft:'15px',
                                        backgroundColor:'rgb(24, 172, 4)',textDecoration:'line-through'}} onClick={() => taskDone(index)} className="cancel">
                                            <DoneIcon style={{color:'white',fontSize:'25px',fontWeight:'bold'}}/>
                                        </button>
                                    </div>
                                    </div>
                                </>
                            )
                            })}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TodoWithUi;