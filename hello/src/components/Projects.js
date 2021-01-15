import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Cards from './Cards'
import Button from 'react-bootstrap/Button'

/*
                <div>
    
<h4>My Projects</h4>
            <br/>
            <CardDeck>


                <Card>
                    <Cards title="Pro1" description="des1"/>
                </Card>
                <Card>
                    <Cards title="Pro2" description="des2"/>
                </Card>
                <Card>
                    <Cards title="Pro3" description="des3"/>
                </Card>
                <Card>
                    <Cards title="Pro4" description="des4"/>
                </Card>
                    </CardDeck>
            <br/>
            <hr/>
        </div>
        
                
                */
        
               

function Projects(){
    const projectsdata=[
        {
            "id":"1",
            "name":"Dumpster - An app to trade Biowaste",
            "tech":"Tech Stack: Android Studio XML, Java Activity, Firebase, R(Machine Learning)",
            "description":"Trade of bio-waste between farmers,companies through drivers.",
            "recog":"(1)Presented paper at IIIT Kottayam in ICITIIT'20(International Conference on Innovative Trends in Information Technology) (2) Top 15 finalist in NetApp Women Innovathon 2002",
            "link":"k"
            
        },
        {
            "id":"2",
            "name":"Intelligent Driver Warning System",
            "tech":"Tech Stack: Image Processing,Machine Learning ,IOT ,python",
            "description":"To detect traffic signs , traffic density and warn the driver about safe speed limit.",
            "recog":"Top 5 teams in internal hackathon nominated for SIH(Smart India Hackathon) idea submission",
            "link":"k"
        },
        {
            "id":"3",
            "name":"Inclusion of google recaptcha to web application to prevent Distributed Denial of Service attack by Bots.",
            "tech":"Tech Stack : NodeJS , GoogleReCaptcha API",
            "description":"This enables the application to be secure against DDoS attacks and reduce server workload.",
            "recog":"Implemented this as a function module in an internship with Goschedule.io",
            "link":"k"
        },
        {
            "id":"4",
            "name":"Online Placement Portal",
            "tech":"Tech Stack: PHP ,MySQL ,HTML ,CSS ,Bootstrap and BuddyCSS.",
            "description":" To facilitate students to attend interviews by filtering them on criteria given by companies.",
            "recog":"(CERTATIM’19-24 hour hackathon first place)",
            "link":"k"

        }

    ];


    const projectsCard=projectsdata.map(project=>(
    <Card key={project.id}>
                <Card.Body>
                    
                    <Card.Title>
                        {project.name}
                    </Card.Title>
                    <hr/>
                    <Card.Subtitle>
                        {project.tech}
                    </Card.Subtitle>
                    <hr/>
                    <Card.Text>
                        
                       {project.description}
                    </Card.Text>
                   
                    <Card.Text>
                        {project.recog}
                    </Card.Text>
                </Card.Body>
                    <Card.Footer>
                        <a href={project.link}><Button>Know More</Button></a>
                    </Card.Footer>
    </Card>
    ))
    return <div><h4>My Projects</h4><br/><CardDeck>{projectsCard}</CardDeck><br/><br/></div>

    
    }



export default Projects
