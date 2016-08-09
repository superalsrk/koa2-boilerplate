import React from 'react';

import { connect } from 'react-redux';
import { checkAuth } from '../actions/authed';

import Header from '../components/Header';
import Leftbar from '../components/Leftbar';
import Github from '../components/Github';

class DashboardContainer extends React.Component {
    componentDidMount() {
        document.body.classList.remove('bg-white')
        
        if(this.props.route.path != '/404') {
            this.props.dispatch(checkAuth())
        }

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