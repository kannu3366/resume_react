import React,{Component} from 'react';

class WelcomeAll extends Component
{
    render()
    {
        return <h2>Get to Know Me {this.props.option}!</h2>;

    }
}

export default WelcomeAll;