import React, { Component } from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip
} from 'recharts';
import ChartConfig from 'Constants/chart-config';

class SimpleBarChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={250}>
				<BarChart data={this.props.data} barGap={0} barSize={20} margin={{ top: 10, right: 5, bottom: 10, left: 15 }}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} tickLine={false} />
					<YAxis
						stroke={ChartConfig.axesColor}
						domain={[0, 1000]}
						minTickGap={0}
						tickLine={false}
						width={30}
						interval={0}
						axisLine={false}
					/>
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip />
					<Bar dataKey="websiteViews" fill={ChartConfig.color.info} />
					<Bar dataKey="emailSubscription" fill={ChartConfig.color.primary} />
				</BarChart>
			</ResponsiveContainer>
		);
	}
}

export default SimpleBarChartComponent;
