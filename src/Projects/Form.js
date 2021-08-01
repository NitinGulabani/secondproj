import React, { useState } from 'react';

const Form = (prop) => {
    var [values,setValues] = useState({
        fName:'',
        lName:'',
        email:'',
        mobile:''
    });

    const inputValues = (text) => {
        
        setValues((prevVal) => {
            if(text.target.name == 'fName'){
                return {
                    fName : text.target.value,
                    lName : prevVal.lName,
                    email : prevVal.email,
                    mobile : prevVal.mobile
                };
            }else if(text.target.name == 'lName'){
                return {
                    fName : prevVal.fName,
                    lName : text.target.value,
                    email : prevVal.email,
                    mobile : prevVal.mobile
                };
            }else if(text.target.name == 'email'){
                return {
                    fName : prevVal.fName,
                    lName : prevVal.lName,
                    email : text.target.value,
                    mobile : prevVal.mobile
                };
            }else {
                return {
                    fName : prevVal.fName,
                    lName : prevVal.lName,
                    email : prevVal.email,
                    mobile : text.target.value
                };
            }
        });
    }

    const setText = (event) => {
        event.preventDefault();

    }

    return(
        <>
        <form onSubmit={setText}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="mb-2">Hello, {values.fName} {values.lName} </h1>
                <h5 className="font-weight-bolder">{values.email}</h5>
                <h5 className="font-weight-bolder">{values.mobile}</h5>
                <input 
                    onChange={inputValues} 
                    className="mb-4"
                    name="fName" 
                    type="text" placeholder="Enter Your Username">
                </input>

                <input 
                    onChange={inputValues}
                    name="lName" 
                    className="mb-4" 
                    type="text" 
                    placeholder="Enter Your LastName">
                </input>

                <input 
                    onChange={inputValues}
                    name="email" 
                    className="mb-4" 
                    type="text" 
                    placeholder="Enter Your email">
                </input>

                <input 
                    onChange={inputValues}
                    name="mobile" 
                    className="mb-4" 
                    type="text" 
                    placeholder="Enter Mobile Number">
                </input>

                <button type="submit" className="mb-4">Click Me</button>
            </div>
        </form>
        </>
        
    );
}

export default Form;