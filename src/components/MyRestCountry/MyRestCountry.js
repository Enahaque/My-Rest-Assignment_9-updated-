import React, { useEffect, useState } from 'react';
import MyRestCountryDetail from '../MyRestCountryDetail/MyRestCountryDetail';

const MyRestCountry = () => {
    const[countries,setCountries]=useState([]);
    console.log(countries);
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data =>setCountries(data));
    },[])
    return (
        <div className='countries'>
            <h1>My Rest Countries :{countries.length}</h1>
            <div className='countries-container'>
                {
                countries.map(country => <MyRestCountryDetail
                key={country.id}
                country={country}
                ></MyRestCountryDetail>)
                }
            </div>
        </div>
    );
};

export default MyRestCountry;