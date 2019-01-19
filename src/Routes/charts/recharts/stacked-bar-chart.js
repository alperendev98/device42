import React, { Component } from 'react';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import ChartConfig, { tooltipStyle, tooltipTextStyle } from 'Constants/chart-config';

const data = [
	{ name: 'Page A', seriesA: 4000, seriesB: 2400 },
	{ name: 'Page B', seriesA: 3000, seriesB: 1398 },
	{ name: 'Page C', seriesA: 2000, seriesB: 9800 },
	{ name: 'Page D', seriesA: 2780, seriesB: 3908 },
	{ name: 'Page E', seriesA: 1890, seriesB: 4800 },
	{ name: 'Page F', seriesA: 2390, seriesB: 3800 },
	{ name: 'Page G', seriesA: 3490, seriesB: 4300 }
];

class StackedBarChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<BarChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Legend />
					<Bar dataKey="seriesB" stackId="a" fill={ChartConfig.color.default} />
					<Bar dataKey="seriesA" stackId="a" fill={ChartConfig.color.primary} />
				</BarChart>
			</ResponsiveContainer>
		);
	}
}

export default StackedBarChartComponent;
