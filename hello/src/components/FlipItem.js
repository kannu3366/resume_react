import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

let image1 = require("./images/download.jpg");
let image2 = require("./images/quote1.jpg");
let image3 = require("./images/quote2.jpg");
let image4 = require("./images/quote3.jpg");
let image5 = require("./images/quote4.jpg");

const FlipItem=(props) =>{
    
    console.log(props)
    let image=image1
    let num=props.content
    if(num=="2")
    {
        image=image2;
    }
    else if(num=="3")
    {
        image=image3;
    }
    else if(num=="4")
    {
        image=image4;
    }
    else if(num=="5")
    {
        image=image5;
    }

    return (
        <div>
        
       
                    
                <img src={image.default} alt="image not found" height="30%" width="30%" />
                   
                    
                    <Carousel.Caption>
                    <h3></h3>
                    <p>{props.content}</p>
                    </Carousel.Caption>
        
        
        </div>
    )
}

export default FlipItem
