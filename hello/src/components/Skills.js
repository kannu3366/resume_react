import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

//let skillImg = require("./images/skills.jpg");


function Skills() {
    return (
        <Container horizontal="md5">
            <h4>My Skills Include</h4>
           
            <Row className="justify-content-md-center">
            

      
            <ListGroup style={{color:"black"}} >
                
                <ListGroup.Item variant="info">
                    Backend Development 
                </ListGroup.Item><br/>
                <ListGroup.Item variant="info">
                    Mobile app development
                </ListGroup.Item><br/>
                <ListGroup.Item variant="info">
                    Database Management System
                </ListGroup.Item><br/>
                <ListGroup.Item variant="info">
                    Deep Learning
                </ListGroup.Item><br/><br/>
  
            </ListGroup>
            </Row>
            
                
        
        
        </Container>
    )
}

export default Skills
