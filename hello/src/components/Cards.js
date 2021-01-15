import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Cards=(props)=> {
    return (
        <div>
            
               { /*
                    <Card.Img variant="top" src={image1.default} width="20%" height="40%" />*/}
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
