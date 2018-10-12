import React, {Component} from 'react';

export default class Auth extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event){
        this.setState({username: event.target.value})
    }
    handlePassword(event){
        this.setState({password: event.target.value})
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Auth</h1>
                <h3>Username</h3>
                <input type='text' onChange={this.handleUsername}/>
                <h3>Password</h3>
                <input type='text' onChange={this.handlePassword}/>
                <button>Login</button>
                <button>Register</button>

            </div>
        )
    }
}