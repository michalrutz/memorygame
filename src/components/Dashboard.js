import React, {Component} from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import Header from './Header';

const Dashboard = (props) => {
        return (
            <div id="dashboard">
                <Board/>
                <Header count={props.count.count}/>
            </div> 
    )
}

const mapStateToProps = (state) => ({
    count:state.countReducer
})

export default connect(mapStateToProps)(Dashboard);

