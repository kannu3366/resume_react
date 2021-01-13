import React from 'react';

const FunctionClick = () =>{
     //console.log(props)
     function clickMsg()
     {
         console.log("hello 1")
     }
     return (
     <div>
        <h1>Hi! This is </h1>
        <button onClick={clickMsg}>click here</button>
    </div>
        )
}

export default FunctionClick