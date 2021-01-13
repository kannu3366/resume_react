import React, { Component } from 'react'

export class BindingSamp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'hi'
        }
        //this.clickHandler=this.clickHandler.bind(this)//m3
    }
    /*clickHandler()
    {
       this.setState({
            message:'hello'
        },
        ()=>{
            console.log(this.state.message)
        })

    }*/ //m1,2,3

    //m4 below

    clickHandler=()=>{
        this.setState({
            message:'hello'
        },
        ()=>{
            console.log(this.state.message)
        })


    }


    
    render() {
       // console.log(this.state.message)
        return (

            <div>
                
               {/* <button onClick={this.clickHandler.bind(this)}>click now</button> //m1
                
                <button onClick={()=> this.clickHandler()}>click now</button>  //m2
                
                <button onClick={this.clickHandler}>click now</button> //m3(best)
                //m4 below
        */}
                 <button onClick={this.clickHandler}>click now</button>      
            </div>
        )
    }
}

export default BindingSamp
