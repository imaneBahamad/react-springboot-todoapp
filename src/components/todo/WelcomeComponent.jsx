import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {

    constructor(){
        super()
        this.retreiveWelcomeMessage = this.retreiveWelcomeMessage.bind(this)
        this.handleSuccessfulRequest = this.handleSuccessfulRequest.bind(this)

        this.state = {
            welcomeMessage : ''
        }

    }

    render(){
        return(
            <div className="WelcomeComponent">
                <h1>Welcome !</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.<br/>
                    You can manage all your todos from <Link to="/todos">Here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message
                    <button onClick={this.retreiveWelcomeMessage} className="btn btn-success">Get welcome message</button>
                </div>
                <div className="container">
                   {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    retreiveWelcomeMessage(){
        HelloWorldService.executeHelloWorldService()  // Here we get our promise
        .then(response => this.handleSuccessfulRequest(response)) //Successful promise
        .catch() //Promise failed
    }

    handleSuccessfulRequest(response){
        this.setState({
            welcomeMessage : response.data
        })
    }
}

export default WelcomeComponent;