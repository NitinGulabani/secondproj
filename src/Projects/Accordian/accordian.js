import React from 'react';
import questions from './api';
import './accordian.css';
import MyAccordian from './MyAccordian';

const Accordian = () => {
    return(
        <>
            <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="box d-flex flex-column">
                    <h4 className="mt-3 ms-4">React Interview Questions</h4>
                    {questions.map((curElem,index) => {
                        return <MyAccordian 
                            {...curElem}
                        />
                    })}
                </div>
            </div>
        </>
    )
    
}

export default Accordian;