import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    // console.log(this.props)
    // if(this.props.location.pathname === '/'){
    //     return null;
    // } else {
        return(
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
            </div>
        )
    }
// }