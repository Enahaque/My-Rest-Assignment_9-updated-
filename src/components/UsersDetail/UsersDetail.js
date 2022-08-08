import React from 'react';

const UsersDetail = (props) => {
    const{name,email,address,phone}=props.user;
    return (
        <div className='display'>
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>{address.city}</h4>
            <h5>{phone}</h5>
        </div>
    );
};

export default UsersDetail;