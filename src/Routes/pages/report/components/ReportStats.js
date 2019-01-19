/**
 * Report Stats Widget
 */
import React, { Component } from 'react';

// chart
import ProductStatsChart from 'Components/Charts/ProductStatsChart';

// chart config
import ChartConfig from 'Constants/chart-config';

class ReportStats extends Component {
	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<ul className="list-unstyled report-list">
						<li>
							<h4 className="heading mb-10">Total Sales</h4>
							<h2>$28,557.5</h2>
						</li>
						<li>
							<h4 className="heading mb-10">Total Orders</h4>
							<h2>37</h2>
						</li>
						<li>
							<h4 className="heading mb-10">Total Visitors</h4>
							<h2>2544</h2>
						</li>
					</ul>
				</div>
				<div className="col-md-8">
					<div className="chart-top mb-40">
						<span className="ladgend badge-primary mr-10">&nbsp;</span>
						<span className="fs-12 mr-10">Admin Theme</span>
						<span className="badge-info ladgend mr-10">&nbsp;</span>
						<span className="fs-12 mr-10">Wordpress theme</span>
					</div>
					<ProductStatsChart
						labels={['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']}
						datasets={[
							{
								label: 'Series A',
								fill: false,
								tension: 0,
								backgroundColor: ChartConfig.color.primary,
								borderColor: ChartConfig.color.primary,
								borderWidth: 4,
								hoverBackgroundColor: ChartConfig.color.primary,
								hoverBorderColor: ChartConfig.color.primary,
								data: [2500, 900, 400, 1100, 1250, 900, 2100, 3400, 1950, 2000, 700, 740]
							},
							{
								label: 'Series B',
								fill: false,
								tension: 0,
								backgroundColor: ChartConfig.color.info,
								borderColor: ChartConfig.color.info,
								borderWidth: 4,
								hoverBackgroundColor: ChartConfig.color.info,
								hoverBorderColor: ChartConfig.color.info,
								data: [3800, 3300, 2300, 3500, 2800, 3200, 3100, 4100, 3500, 3000, 2500, 2300]
							}
						]}
					/>
				</div>
			</div>
		);
	}
}

export default ReportStats;
