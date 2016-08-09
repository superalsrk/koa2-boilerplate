import React from 'react';

import { connect } from 'react-redux';

import Header from '../components/Header';
import Leftbar from '../components/Leftbar';
import Github from '../components/Github';

class DashboardContainer extends React.Component {
    componentDidMount() {
        document.body.classList.remove('bg-white')
    }

    render() {
        return (
            <div>
                <Github/>
            <Header/>
            <Leftbar/>
            <div className="sidebar-bg"></div>
            
            </div>
        )
    }
}

export default connect()(DashboardContainer)