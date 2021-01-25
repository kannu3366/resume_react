import React from 'react'
import {BrowserRouter as Router, Switch , Route ,Link} from 'react-router-dom'
import ProjectFormInput from './ProjectFormInput';

import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects'
import ProjectsList from './ProjectsList'

import Quotes from './Quotes'
import Message from './Message';


function Navbar() {
    return (
        <div>
             
             <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <a href="/message" className="navbar-brand">
                        My Profile
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to={"/projects"} className="nav-link">
                            Projects
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link to={"/add"} className="nav-link">
                            Add Project
                        </Link>
                        </li>
                        
                        <li className="nav-item">
                        <Link to={"/projectsList"} className="nav-link">
                            Projects_List
                        </Link>
                        </li>
                        

                        
                        <li className="nav-item">
                        <Link to={"/quotes"} className="nav-link">
                            Quotes
                        </Link>
                        </li>

                    </div>
                    </nav>

                    <div >
                    <Switch>
                        <Route exact path={["/", "/message"]} component={Message} />
                        <Route exact path="/add" component={ProjectFormInput} />
                        <Route path="/projects/:id" component={Projects} />
                        <Route path="/projectsList" component={ProjectsList} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/quotes" component={Quotes} />
                    </Switch>
                    </div>
        </div>
    )
}

export default Navbar

                    
                    
                   