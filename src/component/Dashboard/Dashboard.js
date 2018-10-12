import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateSearch} from '../../ducks/reducer';

export class Dashboard extends Component{


    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <input type="text" placeholder="Search by title" onChange={this.props.updateSearch} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {search} = state;
    console.log(state);
    return{
        search
    }
}

export default connect(mapStateToProps, {updateSearch})(Dashboard);