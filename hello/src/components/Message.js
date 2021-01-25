import React,{Component} from 'react';
import BindingSamp from './BindingSamp';
import '../stylesheet/navbar.css';
import Button from 'react-bootstrap/Button';
import Skills from './Skills'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
//import Link from 'react-router-dom'

let backpic='/images/backpic.jpg'

class Message extends Component
{

    constructor()
    {
        super()
        this.state={
            message: 'Hello All! Visiting here for the first time?',
            date: new Date()
        }
    }

    tick()
    {
        this.setState({
            date:new Date()
        })

    }

    componentDidMount()
    {
        this.timerID= setInterval(()=>this.tick(),1000)
    }
    componentWillUnmount()
    {
        clearInterval(this.timerID)
    }


    changeMessage()
    {
        this.setState({
            message:'Scroll down to know My Journey '
        })
    }

    render()
    {
        return (
        <div>
             <div style={{backgroundImage:`url(${backpic})`}}>
               
                   {/* <nav >
                        
                        <a href = "#"><pre class="tab1"><h4 style={{color:"white"}}>Intro</h4></pre></a>
                        <a href = "#"><pre class="tab1"><h4 style={{color:"white"}}>Skills</h4></pre></a> 
                        <a href = "#"><pre class="tab1"><h4 style={{color:"white"}}>Projects</h4></pre></a>  
                        <a href = "#"><pre class="tab1"><h4 style={{color:"white"}}>Hobbies</h4></pre></a>  
                        <a href = "#"><pre class="tab1"><h4 style={{color:"white"}}>Contact</h4></pre></a>  
                        
                   </nav>*/}
                <br/>
                <h6 >Time : {this.state.date.toLocaleTimeString()}</h6>


                <h4>
                    {this.state.message}
                </h4>
                <Button variant="primary" onClick={() => this.changeMessage()}>Yes!</Button>{' '}
                <br/>
                <br/>


                <h4>Hi, I am Kanmani A</h4>
                <br></br>


                <Container>
                    <Card>
                    
                    
                    <Card.Header as="h5">Education</Card.Header>
                    <Card.Body>
                        <Card.Title>I am pursuing B.Tech(IT) @ Thiagarajar College of Engineering</Card.Title>
                        <Card.Text>
                            I am a highly motivated programmer who believes in practice to learn.
                        </Card.Text>
                    </Card.Body>
                  
                </Card>
                </Container>


                <br/>
                <hr/>
                <br/>
               
                <Skills/>
                <hr/>


            </div>


        </div>
        )
    }
}

export default Message;