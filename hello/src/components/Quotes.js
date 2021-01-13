import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import FlipItem from './FlipItem';



function Quotes() {
    return (
        <div style={{backgroundColor:"black"}}>
            <Jumbotron>
                <h4>Some of My Writings!</h4>

                <br/>
                <br/>

                <Carousel>
                    <Carousel.Item>
                        <FlipItem content="2"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="3"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="4"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="5"/>
                    </Carousel.Item>

                </Carousel>
            </Jumbotron>
        </div>
    )
}

export default Quotes
