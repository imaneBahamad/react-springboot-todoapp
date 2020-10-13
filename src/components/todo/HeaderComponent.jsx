import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import AuthenticationService from './AuthenticationService'
 
class HeaderComponent extends Component {
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
        console.log(isUserLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">Imane's Todo</div>
                    <ul className="navbar-nav">
                        { isUserLoggedIn && <li><Link to="/welcome/imane" className="nav-link">Home</Link></li>}
                    { isUserLoggedIn && <li><Link to="/todos" className="nav-link">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li>}
                        { isUserLoggedIn && <li><Link to="/logout" onClick={AuthenticationService.logout} className="nav-link" >Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent)