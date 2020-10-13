import React, {Component} from 'react'
import {Link} from 'react-router-dom'
 
class WelcomeComponent extends Component {

    render(){
        return(
            <div className="WelcomeComponent">
                <h1>Welcome !</h1>
                <div className="container">
                    Welcome {this.props.match.params.name}.<br/>
                    You can manage all your todos from <Link to="/todos">Here</Link>
                </div>
            </div>
        )
    }
}

export default WelcomeComponent;