import React from 'react';

const GreetAll = (props) =>{
     console.log(props)
     return (
     <div>
        <h1>Hi! This is {props.name}</h1>
        {props.children}
    </div>
        )
}

export default GreetAll