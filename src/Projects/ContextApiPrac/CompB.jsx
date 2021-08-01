import React, { useEffect, useState } from 'react';
import axios from 'axios';
const CompB = () => {

    const [selectedNum,setSelectedNum] = useState(1);
    var [data,setData] = useState({});

    const setValue = (event) => {
        setSelectedNum(event.target.value);
    }
    useEffect(() => {
        async function getData(){
            var response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedNum}`);
            setData(response.data);
            console.log(response.data);
        }
        getData();
    })

    

    return (
        <>
            <h1>You selected {data.name}</h1>
            {/* <h1>And Their MOves are {data.moves}</h1> */}
            <select onChange={setValue}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>            
        </>
    )
}

export default CompB;