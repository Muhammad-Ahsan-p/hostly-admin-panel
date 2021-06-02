import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './styles/login.css';

class LoginComponent extends Component {
    state = {  }
    render() { 
        return (
            <div className='container'>
                <div className='loginContainer'>
                    <h1>Login!</h1>
                    <hr />
                    <form action="" className='loginForm'>
                        <input type="email" placeholder='Email!' className='loginInput'/>
                        <input type="password" placeholder='Password!' className='loginInput'/>
                        <Link to='/home'><input type="submit" value="Sign In" className="loginBtn"/></Link>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default LoginComponent;