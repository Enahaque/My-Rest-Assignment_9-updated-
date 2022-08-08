import React, { useEffect, useState } from 'react';
import UsersDetail from '../UsersDetail/UsersDetail';

const Users = () => {
    const[users,setUsers]=useState([]);

    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            // .then(data =>console.log(data));
            .then(data =>setUsers(data));
    },[]);


    return (
        <div className='userdetail'>
                {/* <h1>Users : {users.length}</h1> */}
                {
                    users.map(user => <UsersDetail
                        key={user.id}
                        user={user}
                    ></UsersDetail>)
                }
               
                
        </div>
    );
};

export default Users;