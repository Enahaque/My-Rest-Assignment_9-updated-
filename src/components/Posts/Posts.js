import React, { useEffect, useState } from 'react';
import PostsDetail from '../PostsDetail/PostsDetail';

const Posts = () => {
    const[posts,setPosts]=useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    },[])
    return (
        <div className='posts'>
           
            {
                posts.map(post =><PostsDetail
                    key={post.id}
                    post={post}
                ></PostsDetail>)
            }
            
        </div>
    );
};

export default Posts;