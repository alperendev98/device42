/**
 * Recharts
 */
import React, { Component } from 'react';

import LineChart from './line-chart';
import SimpleBarChart from './simple-bar-chart';
import StackedBarChart from './stacked-bar-chart';
import SimpleAreaChart from './simple-area-chart';
import LineBarAreaChart from './line-bar-area-chart';
import SimpleRadarChart from './simple-radar-chart';
import VerticalComposedChart from './vertical-composed-chart';
import StackedAreaChart from './stacked-area-chart';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class ReCharts extends Component {
	render() {
		return (
			<div className="re-chart-wrapper">
				<PageTitleBar
					title={<IntlMessages id="sidebar.reCharts" />}
					match={this.props.match}
				/>
				<div className="row">
					<div className="col-sm-12 col-md-6 col-xl-6">
						<RctCollapsibleCard heading="Line Chart">
							<LineChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Stacked Bar Chart">
							<StackedBarChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Area Chart">
							<SimpleAreaChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Vertical Chart">
							<VerticalComposedChart />
						</RctCollapsibleCard>
					</div>
					<div className="col-sm-12 col-md-6 col-xl-6">
						<RctCollapsibleCard heading="Bar Chart">
							<SimpleBarChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Line Bar Area Chart">
							<LineBarAreaChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Stacked Area Chart">
							<StackedAreaChart />
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Radar Chart">
							<SimpleRadarChart />
						</RctCollapsibleCard>
					</div>
				</div>
			</div>
		);
	}
}
