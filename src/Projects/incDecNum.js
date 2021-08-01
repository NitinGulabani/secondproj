import React, { useState } from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
const IncDecNum = (prop) => {
    var [number,setNumber] = useState(0);

    const incNum = () => {
        setNumber(number + 1);
    }
    const decNum = () => {
        if(number == 0)
        {
            //Nothing to do
        }else{
            setNumber(number - 1);
        }
    }
    return(
        <div className="d-flex justify-content-center align-items-center">
            <div className="box1">
                <div className="container-fluid">
                    <h1 className="number text-center mt-5">{number}</h1>
                    
                </div>
                <div className="buttons d-flex justify-content-around mt-5">
                    <button className="inc btn" onClick={incNum}>Increament</button>
                    <button className="dec btn" onClick={decNum}>Decreament</button>
                </div>
            </div>
        </div>
    )
}

export default IncDecNum;