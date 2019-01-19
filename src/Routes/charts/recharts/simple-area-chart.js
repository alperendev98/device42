import React, { Component } from 'react';
import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip
} from 'recharts';
import ChartConfig, { tooltipStyle, tooltipTextStyle } from 'Constants/chart-config';

const data = [
	{ name: 'Page A', seriesA: 4000 },
	{ name: 'Page B', seriesA: 3000 },
	{ name: 'Page C', seriesA: 2000 },
	{ name: 'Page D', seriesA: 2780 },
	{ name: 'Page E', seriesA: 1890 },
	{ name: 'Page F', seriesA: 2390 },
	{ name: 'Page G', seriesA: 3490 }
];

class SimpleAreaChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<AreaChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Area type='monotone' dataKey='seriesA' stroke={ChartConfig.color.primary} fill={ChartConfig.color.primary} fillOpacity="1" />
				</AreaChart>
			</ResponsiveContainer>
		);
	}
}

export default SimpleAreaChartComponent;
