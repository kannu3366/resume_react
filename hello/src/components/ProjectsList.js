import React, { Component } from 'react'
import ProjectsDataService from '../services/projects.service'

export class ProjectsList extends Component {

    constructor(props) {
        super(props)

        this.retrieveProjects = this.retrieveProjects.bind(this);
    
        this.state = {
             projects : []
        }
    }

    retrieveProjects()
    {
        ProjectsDataService.getAll().then(response => {
            this.setState({
                projects : response.data
            })
            console.log(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    deleteProjects(id)
    {
        ProjectsDataService.delete(id).then(response => {
            console.log("success");

          })
          .catch(e => {
            console.log(e);
          });
    }
    

    render() {
        const {projects}=this.state
        return (
            <div>
                <button onClick={()=>this.retrieveProjects(this)}>Get Project List</button>
                 <ul className="list-group">
                    {projects &&
                    projects.map((project) => (
                        <li
                        className={"list-group-item "}
                        key={project.id}
                        >
                        {project.id} . {project.projectName}
                        <button onClick={()=>this.deleteProjects(project.id)}>Delete Project</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ProjectsList
