import React, { useEffect, useState } from 'react';
import CommentsDetail from '../CommentsDetail/CommentsDetail';

const Comments = () => {
    const[comments,setComments]=useState();
    
    useEffect( ()=>{

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data =>setComments(data));
    },[])
    return (
        <div className='commentbody'>
            
            {
              comments.map(comment => <CommentsDetail
              key={comment.id}
              comment={comment}
              
              ></CommentsDetail>)
            }

        </div>
    );
};

export default Comments;