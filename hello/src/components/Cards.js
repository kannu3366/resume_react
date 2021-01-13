import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

let image1 = require("./images/download.jpg");
let image2 = require("./images/quote1.jpg");
let image3 = require("./images/quote2.jpg");
let image4 = require("./images/quote3.jpg");
let image5 = require("./images/quote4.jpg");


const Cards=(props)=> {
    return (
        <div>
            
                
                    <Card.Img variant="top" src={image1.default} width="20%" height="40%" />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Know More</Button>
                    </Card.Footer>
                
        </div>
    )
}

export default Cards
