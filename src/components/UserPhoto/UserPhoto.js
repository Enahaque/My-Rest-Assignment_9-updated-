import React, { useEffect, useState } from 'react';
import PhotosDetail from '../PhotosDetail/PhotosDetail';

const UserPhoto = () => {
    const[photos,setPhotos]=useState([]);
    useEffect( () =>{
        
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setPhotos(data));
    },[])
    return (
        <div>
            <h3>Use photo : {photos.length}</h3>
            {
                photos.map(photo =><PhotosDetail
                    key={photo.id}
                    photo={photo}
                ></PhotosDetail>)
            }
        </div>
    );
};

export default UserPhoto;