import React, { createContext, useContext } from 'react';
import CompB from './CompB';
import { FirstName,LastName } from './App';


const CompA = () => {
    const fName = useContext(FirstName);
    const lName = useContext(LastName);
    return (
        <>
            <CompB/>
            <h1>My Second Name is {fName} {lName}</h1>
        </>
    )
}

export default CompA;