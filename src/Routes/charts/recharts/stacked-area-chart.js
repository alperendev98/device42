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

// chart data
const data = [
	{ name: 'Page A', seriesA: 4000, seriesB: 2400, seriesC: 2400 },
	{ name: 'Page B', seriesA: 3000, seriesB: 1398, seriesC: 2210 },
	{ name: 'Page C', seriesA: 2000, seriesB: 9800, seriesC: 2290 },
	{ name: 'Page D', seriesA: 2780, seriesB: 3908, seriesC: 2000 },
	{ name: 'Page E', seriesA: 1890, seriesB: 4800, seriesC: 2181 },
	{ name: 'Page F', seriesA: 2390, seriesB: 3800, seriesC: 2500 },
	{ name: 'Page G', seriesA: 3490, seriesB: 4300, seriesC: 2100 },
];

export default class StackedAreaChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<AreaChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Area type='monotone' dataKey='seriesA' stackId="1" stroke={ChartConfig.color.primary} fill={ChartConfig.color.primary} fillOpacity="1" />
					<Area type='monotone' dataKey='seriesB' stackId="1" stroke={ChartConfig.color.warning} fill={ChartConfig.color.warning} fillOpacity="1" />
					<Area type='monotone' dataKey='seriesC' stackId="1" stroke={ChartConfig.color.info} fill={ChartConfig.color.info} fillOpacity="1" />
				</AreaChart>
			</ResponsiveContainer>
		);
	}
}
