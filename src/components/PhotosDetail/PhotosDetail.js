import React from 'react';

const PhotosDetail = (props) => {
    const{title,url}=props.photo;
    return (
        <div>
            <h2>{title}</h2>
            <img src={url} alt=".." />

        </div>
    );
};

export default PhotosDetail;