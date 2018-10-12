import React, { Component } from 'react';

export default class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    handleUsername(event) {
        this.setState({ username: event.target.value })
    }
    handlePassword(event) {
        this.setState({ password: event.target.value })
    }

    login() {
        let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

        // window.location.origin ===> fancy way of saying http://localhost:3000
        let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Auth</h1>
                <h3>Username</h3>
                <input type='text' onChange={this.handleUsername} />
                <h3>Password</h3>
                <input type='text' onChange={this.handlePassword} />
                <div>
                    <button onClick={this.login}>Login/Register</button>
                </div>


            </div>
        )
    }
}