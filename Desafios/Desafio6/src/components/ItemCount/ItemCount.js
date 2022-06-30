import React, { useState } from 'react';


function ItemCount({ stock, initial,  onAdd }){
    const [count, setCount] = useState(initial);
    console.log('count')
    function addCount () {
        if (count < stock) {
        setCount(count + 1)}
        else{
        setCount(count + 0)}
    }
        
    function decreaseCount () {
        if (count > 1) {
            setCount(count - 1)}
            else{
                setCount(count - 0)};
    }

    
    return <div>
            <button onClick={addCount}> + </button>
            <h2>{count}</h2>
            <button onClick={decreaseCount}> - </button>
            <button onClick={ ()=>onAdd(count)}>Add to cart </button>                                                   
        </div>;   
}

export default ItemCount;