import React from 'react';

import { connect } from 'react-redux';

import Header from '../components/Header';
import Leftbar from '../components/Leftbar';


class DashboardContainer extends React.Component {


    render() {
        return (
            <div>
            <Header/>
            <Leftbar/>
            <div className="sidebar-bg"></div>
            
            </div>
        )
    }
}


export default connect()(DashboardContainer)