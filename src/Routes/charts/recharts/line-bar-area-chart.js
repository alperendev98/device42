import React, { Component } from 'react';
import {
	ResponsiveContainer,
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';
import ChartConfig, { tooltipStyle, tooltipTextStyle } from 'Constants/chart-config';

// chart data
const data = [
	{ name: 'Page A', seriesA: 290, seriesB: 400, seriesC: 1000 },
	{ name: 'Page B', seriesA: 868, seriesB: 1700, seriesC: 1506 },
	{ name: 'Page C', seriesA: 1397, seriesB: 1098, seriesC: 989 },
	{ name: 'Page D', seriesA: 1480, seriesB: 1400, seriesC: 1228 },
	{ name: 'Page E', seriesA: 1520, seriesB: 1600, seriesC: 1100 },
	{ name: 'Page F', seriesA: 1400, seriesB: 680, seriesC: 1700 }
];

export default class LineBarAreaChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<ComposedChart data={data}>
					<XAxis dataKey="name" stroke={ChartConfig.axesColor} />
					<YAxis stroke={ChartConfig.axesColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Legend />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Area type='monotone' dataKey='seriesC' fill={ChartConfig.color.info} stroke={ChartConfig.color.info} fillOpacity="0.9" />
					<Bar dataKey='seriesB' barSize={20} fill={ChartConfig.color.primary} />
					<Line type='monotone' dataKey='seriesA' stroke={ChartConfig.color.warning} fill={ChartConfig.color.warning} />
				</ComposedChart>
			</ResponsiveContainer>
		);
	}
}
