import React, { useState } from 'react';

const Count = () => {
    const[count,setCount] = useState(1);
    console.log(count);
    const increaseCount = () =>setCount(count+1);
    const decreaseCount = () =>setCount(count-1);
   
    
    return (
        <div>
            <h3 className='count'>Count :{count} </h3>
            <button onClick={increaseCount} className='btn'><span>+</span></button>
            <button onClick={decreaseCount} className='btn'><span>-</span></button>
        </div>
    );
};

export default Count;