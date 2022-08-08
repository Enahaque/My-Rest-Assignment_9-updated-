import React, { useEffect, useState } from 'react';

const YourCountry = () => {
    const[countries,setCountries]=useState();
    useEffect( ()=>{
        const url =`https://restcountries.com/v3.1/name/${countries}`;
        fetch(url)
            .then(res =>res.json())
            .then(data =>console.log(data));
    },[])


    return (
        <div>
            <h2>Your Country</h2>
        </div>
    );
};

export default YourCountry;