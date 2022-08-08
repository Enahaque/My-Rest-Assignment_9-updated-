import React from 'react';

const MyRestCountryDetail = (props) => {
    const{name,flags,capital,continents}=props.country;
    return (
        <div className='country'>
            <h3>{name.common}</h3>
            <img src={flags.png}alt="/" />
            <h3>{capital}</h3>
            <h3>{continents}</h3>
        </div>
    );
};

export default MyRestCountryDetail;