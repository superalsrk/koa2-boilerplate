import React, { PropTypes } from 'react';

class Header extends React.Component {

  render() {
    return (
          <div id="header" className="header navbar navbar-default navbar-fixed-top">
			    <div className="container-fluid">
				    <div className="navbar-header">
					    <a href="javascript:void(0)" className="navbar-brand"><span className="navbar-logo"></span> Color Admin</a>
					    <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
						    <span className="icon-bar"></span>
						    <span className="icon-bar"></span>
						    <span className="icon-bar"></span>
					    </button>
				    </div>
			    </div>
		    </div>
    )
  }
}

export default Header
