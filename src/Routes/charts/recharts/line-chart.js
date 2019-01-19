import React, { Component } from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import ChartConfig, { tooltipStyle, tooltipTextStyle } from 'Constants/chart-config';

const data = [
	{ name: 'Page A', seriesA: 1000, seriesB: 2400 },
	{ name: 'Page B', seriesA: 3000, seriesB: 1398 },
	{ name: 'Page C', seriesA: 1500, seriesB: 4000 },
	{ name: 'Page D', seriesA: 2780, seriesB: 3908 },
	{ name: 'Page E', seriesA: 1890, seriesB: 4800 },
	{ name: 'Page F', seriesA: 2390, seriesB: 3800 },
	{ name: 'Page G', seriesA: 3490, seriesB: 4300 },
];

class LineChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Legend />
					<Line type="monotone" dataKey="seriesB" stroke={ChartConfig.color.primary} activeDot={{ r: 8 }} />
					<Line type="monotone" dataKey="seriesA" stroke={ChartConfig.color.info} activeDot={{ r: 8 }} />
				</LineChart>
			</ResponsiveContainer>
		);
	}
}

export default LineChartComponent;
