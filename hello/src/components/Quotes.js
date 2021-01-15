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
                        <FlipItem content="1" imgPath="/images/quote1.jpg"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="2" imgPath="/images/quote2.jpg"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="3" imgPath="/images/quote3.jpg"/>
                    </Carousel.Item>

                    <Carousel.Item>
                        <FlipItem content="4" imgPath="/images/quote4.jpg"/>
                    </Carousel.Item>

                </Carousel>
            </Jumbotron>
        </div>
    )
}

export default Quotes
