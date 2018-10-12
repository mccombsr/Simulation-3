import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import axios from 'axios';



class Nav extends Component {

    async componentDidMount(user) {
        let res = await axios.get(`/api/user-data`)
        console.log(res.data)
        // invoke action creator
        this.props.updateUser(res.data)
    }

    render() {
        console.log(this.props)
        let {
            customer_name,
            customer_picture
        } = this.props.user;
        // if(this.props.location.pathname === '/'){
        //     return null;
        // } else {
        return (
            <div>
                <h1>Nav</h1>
                <Link to='/dashboard'>
                    <button>Home</button>
                </Link>
                <Link to='/post'>
                    <button>New Post</button>
                </Link>
                <Link to='/'>
                    <button>Logout</button>
                </Link>
                <div>
                    <p>User Name: {customer_name}</p>
                    <img src={customer_picture}/>
                </div>
            </div>
        )
    }
}
// }

function mapStateToProps(state) {
    console.log(`this is state`, state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { updateUser })(Nav);