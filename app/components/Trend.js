import React, { PropTypes } from 'react';

class Trend extends React.Component {

  componentDidMount() {
      var chartDiv = this.refs.interchart;
      var t = [[1, 40], [2, 50], [3, 60], [4, 60], [5, 60], [6, 65], [7, 75], [8, 90], [9, 100], [10, 105], [11, 110], [12, 110], [13, 120], [14, 130], [15, 135], [16, 145], [17, 132], [18, 123], [19, 135], [20, 150]];
      var n = [[1, 10], [2, 6], [3, 10], [4, 12], [5, 18], [6, 20], [7, 25], [8, 23], [9, 24], [10, 25], [11, 18], [12, 30], [13, 25], [14, 25], [15, 30], [16, 27], [17, 20], [18, 18], [19, 31], [20, 23]];
      var r = [[1, ""], [2, ""], [3, "May&nbsp;15"], [4, ""], [5, ""], [6, "May&nbsp;19"], [7, ""], [8, ""], [9, "May&nbsp;22"], [10, ""], [11, ""], [12, "May&nbsp;25"], [13, ""], [14, ""], [15, "May&nbsp;28"], [16, ""], [17, ""], [18, "May&nbsp;31"], [19, ""], [20, ""]];
     var blue = "#348fe2"
  , blueLight = "#5da5e8"
  , blueDark = "#1993E4"
  , aqua = "#49b6d6"
  , aquaLight = "#6dc5de"
  , aquaDark = "#3a92ab"
  , green = "#00acac"
  , greenLight = "#33bdbd"
  , greenDark = "#008a8a"
  , orange = "#f59c1a"
  , orangeLight = "#f7b048"
  , orangeDark = "#c47d15"
  , dark = "#2d353c"
  , grey = "#b6c2c9"
  , purple = "#727cb6"
  , purpleLight = "#8e96c5"
  , purpleDark = "#5b6392"
  , red = "#ff5b57";
      $.plot(chartDiv, [{
            data: t,
            label: "Page Views",
            color: blue,
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fillColor: "#fff"
            },
            shadowSize: 0
        }, {
            data: n,
            label: "Visitors",
            color: green,
            lines: {
                show: true,
                fill: false,
                lineWidth: 2
            },
            points: {
                show: true,
                radius: 3,
                fillColor: "#fff"
            },
            shadowSize: 0
        }], {
            xaxis: {
                ticks: r,
                tickDecimals: 0,
                tickColor: "#ddd"
            },
            yaxis: {
                ticks: 10,
                tickColor: "#ddd",
                min: 0,
                max: 200
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#ddd",
                borderWidth: 1,
                backgroundColor: "#fff",
                borderColor: "#ddd"
            },
            legend: {
                labelBoxBorderColor: "#ddd",
                margin: 10,
                noColumns: 1,
                show: true
            }
        });
  }


  render() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-inverse" data-sortable-id="index-1">
						<div className="panel-heading">
							<div className="panel-heading-btn">
								<a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-default" data-click="panel-expand"><i className="fa fa-expand"></i></a>
								<a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-success" data-click="panel-reload"><i className="fa fa-repeat"></i></a>
								<a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-warning" data-click="panel-collapse"><i className="fa fa-minus"></i></a>
								<a href="javascript:;" className="btn btn-xs btn-icon btn-circle btn-danger" data-click="panel-remove"><i className="fa fa-times"></i></a>
							</div>
							<h4 className="panel-title">Website Analytics (Last 7 Days)</h4>
						</div>
						<div className="panel-body">
							<div id="interactive-chart" className="height-sm" ref="interchart"></div>
						</div>
                        <div className="panel-footer text-right">
                            <a href="/mock/export/uv" className="btn btn-info btn-sm">Export UV</a>
                            <a href="/mock/export/pv" className="btn btn-primary btn-sm m-l-5">Export PV</a>
                        </div>
				</div>
            </div>
        </div>
    )
  }
}

export default Trend
