import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


const FlipItem=(props) =>{
    
    console.log(props)
   
    return (
        <div>
        
       
                    
                {/*<img src={image.default} alt="image not found" height="30%" width="30%" />*/}

                   
                    <img src={props.imgPath} alt="image not found" height="30%" width="30%" />
                    <Carousel.Caption>
                    <h3></h3>
                    <p>{props.content}</p>
                    </Carousel.Caption>
        
        
        </div>
    )
}

export default FlipItem
