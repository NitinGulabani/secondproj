import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const MyAccordian = ({id,question,answer}) => {
    var [getAnswerValue,setAnswerValue] = useState(false);
    
    const showAnswer = () => {
        setAnswerValue(!getAnswerValue);
        console.log(getAnswerValue);
    }

    return(
        <>
            <div className="main-content ms-4 pe-4">
                <div className="que d-flex mt-3">
                    <div onClick={showAnswer} className="d-inline-block">
                        {!getAnswerValue ? <AddIcon  className="expandAns"/> : <RemoveIcon className="expandAns"/>}
                        
                    </div>
                    <h5>{question}</h5>
                </div>
                { getAnswerValue ? <p className="mt-3">{answer}</p> : ''}
            </div>
        </>
    )
}

export default MyAccordian;