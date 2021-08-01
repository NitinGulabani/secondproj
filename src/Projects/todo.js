import React, { useState } from 'react';
import './todo.css';

var array = ['a','b'];

const Todo = (prop) => {
    
    var [getInputValue,setInputValue] = useState('');
    var [item,listOfItems] = useState([]);

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
    }

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
                            <button className="add" onClick={addItemsToList}>
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    
                            {item.map((itemVal,index) => {
                            return (
                                <div className="col-12">
                                    <li className="d-flex align-items-center">
                                        <button onClick={() => {deleteItemsFromList(index)}} className="cancel">
                                            <i  className="fas fa-times"></i>
                                        </button>
                                        <h4 className="mt-3 ms-4">{itemVal}</h4>
                                    </li>
                                </div>
                            )
                            })}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Todo;