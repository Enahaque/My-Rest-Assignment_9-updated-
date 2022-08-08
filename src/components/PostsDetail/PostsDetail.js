import React from 'react';

const PostsDetail = (props) => {
    const{title,body}=props.post;
    return (
        <div className='post'>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default PostsDetail;