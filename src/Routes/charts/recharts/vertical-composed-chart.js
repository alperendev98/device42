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

const data = [
	{ name: 'Page A', seriesA: 590, seriesB: 800, seriesC: 1400 },
	{ name: 'Page B', seriesA: 868, seriesB: 967, seriesC: 1506 },
	{ name: 'Page C', seriesA: 1397, seriesB: 1098, seriesC: 989 },
	{ name: 'Page D', seriesA: 1480, seriesB: 1200, seriesC: 1228 },
	{ name: 'Page E', seriesA: 1520, seriesB: 1108, seriesC: 1100 },
	{ name: 'Page F', seriesA: 1400, seriesB: 680, seriesC: 1700 }
];

export default class VerticalComposedChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<ComposedChart layout="vertical" data={data}>
					<XAxis type="number" stroke={ChartConfig.axesColor} />
					<YAxis dataKey="name" type="category" stroke={ChartConfig.axesColor} />
					<Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
					<Legend />
					<CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
					<Area dataKey='seriesC' fill={ChartConfig.color.default} stroke={ChartConfig.color.danger} fillOpacity="0.9" />
					<Bar dataKey='seriesB' barSize={20} fill={ChartConfig.color.primary} />
					<Line dataKey='seriesA' stroke={ChartConfig.color.success} />
				</ComposedChart>
			</ResponsiveContainer>
		);
	}
}
