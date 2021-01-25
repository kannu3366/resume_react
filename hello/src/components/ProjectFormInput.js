import React, { Component } from 'react'
import ProjectDataService from '../services/projects.service'

export class ProjectFormInput extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             id:null,
             projectName: '',
        }
    }

    onprojNameChanged=(event)=>{
        this.setState({
            projectName: event.target.value
        })
    }


    /*onprojDescriptionChanged=(event)=>{
        this.setState({
            projDescription: event.target.value
        })
    }*/

    onSubmitForm=(event)=>{
      var projectData = {
        projectName : this.state.projectName
      }
      ProjectDataService.create(projectData).then(response =>{
        console.log(response.projectData)
      })
      .catch(error=>{
        console.log(error)
      })

      alert("submitted "+this.state.projectName)

        //event.preventDefault()
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                  <br/>
                    <label>Project Name : </label>
                    <input type="text" 
                    
                    value={this.state.projName}

                    onChange={this.onprojNameChanged}

                    />
                    <br/>
                    
                   {/* <label>Project Name : </label>
                    <textarea 
                    
                    value={this.state.projDescription}

                    onChange={this.onprojDescriptionChanged}

                    />
                    */}
                    <br/>
                    <button type="submit">Submit</button>

                    

                </form>
                
            </div>
        )
    }
}

/*<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
*/
export default ProjectFormInput
