import React, { createContext, useContext } from 'react';
import CompA from './CompA';


var FirstName = createContext();
var LastName = createContext();

const App = () => {
    return (
        <>
            <FirstName.Provider value = {'Nitidn'}>
                <LastName.Provider value = {'Gulabani'}>
                    <CompA/>
                </LastName.Provider>
            </FirstName.Provider>
        </>
    )
}

export default App;

export {FirstName,LastName};