import React, { useState } from 'react'

function Add() {
    const[count, setCount] = useState(0);

  return (
    <div>
        <h3>Count: {count}</h3>
        <button onClick = {()=> setCount(count + 1)}>+</button> 
    </div>
  )
}

export default Add
