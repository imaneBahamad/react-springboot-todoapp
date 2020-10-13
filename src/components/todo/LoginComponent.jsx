import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService'
 
class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username : "Imane",
            password : "",
            hasLoginFailed : false,
            showSuccessMessage : false
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleUsernameChange(event){
        this.setState({
            username : event.target.value
        })
    }

    handlePasswordChange(event){
        this.setState({
            password : event.target.value
        })
    }

    loginClicked(){
        if(this.state.username==="Imane" && this.state.password==="dummy"){
            /*this.setState({
                showSuccessMessage : true,
                hasLoginFailed : false
            })*/
            AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        }else{
            this.setState({
                showSuccessMessage : false,
                hasLoginFailed : true
            })
        }
    }

    render(){
        return(
            <div className="LoginComponent">
                <h1>Login</h1>
                <div className="container">
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
                    <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
                    {this.state.showSuccessMessage && <div>Login success</div>}
                    Username <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                    Password <input type="password" name="passwprd" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

// Replaced with && operator
/*function ShowInvalidCredentials(props){
    if(props.hasLoginFailed)
        return <div>Invalid credentials</div>
    return null
}

function ShowLoginSuccessMessage(props){
    if(props.showSuccessMessage)
        return <div>Login success</div>
    return null
}*/

export default LoginComponent;