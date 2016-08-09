import React, { PropTypes } from 'react';

class Summary extends React.Component {

  render() {
    return (
        <div className="row">
				<div className="col-md-3 col-sm-6">
					<div className="widget widget-stats bg-green">
						<div className="stats-icon"><i className="fa fa-desktop"></i></div>
						<div className="stats-info">
							<h4>TOTAL VISITORS</h4>
							<p>3,291,922</p>	
						</div>
						<div className="stats-link">
							<a href="javascript:;">View Detail <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
		
				<div className="col-md-3 col-sm-6">
					<div className="widget widget-stats bg-blue">
						<div className="stats-icon"><i className="fa fa-chain-broken"></i></div>
						<div className="stats-info">
							<h4>BOUNCE RATE</h4>
							<p>20.44%</p>	
						</div>
						<div className="stats-link">
							<a href="javascript:;">View Detail <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
			
				<div className="col-md-3 col-sm-6">
					<div className="widget widget-stats bg-purple">
						<div className="stats-icon"><i className="fa fa-users"></i></div>
						<div className="stats-info">
							<h4>UNIQUE VISITORS</h4>
							<p>1,291,922</p>	
						</div>
						<div className="stats-link">
							<a href="javascript:;">View Detail <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
			
				<div className="col-md-3 col-sm-6">
					<div className="widget widget-stats bg-red">
						<div className="stats-icon"><i className="fa fa-clock-o"></i></div>
						<div className="stats-info">
							<h4>AVG TIME ON SITE</h4>
							<p>00:12:23</p>	
						</div>
						<div className="stats-link">
							<a href="javascript:;">View Detail <i className="fa fa-arrow-circle-o-right"></i></a>
						</div>
					</div>
				</div>
			</div>
    )
  }
}

export default Summary
