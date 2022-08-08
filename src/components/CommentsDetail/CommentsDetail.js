import React from 'react';

const CommentsDetail = (props) => {
    const{name,body} = props.comment;
    return (
        <div className='comment'>
            <h2>{name}</h2>
            <h3>{body}</h3>
        </div>
    );
};

export default CommentsDetail;