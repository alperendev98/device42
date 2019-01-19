import React, { Component } from 'react';
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis
} from 'recharts';
import ChartConfig from 'Constants/chart-config';

// chart data
const data = [
	{ subject: 'Math', A: 120, B: 110, fullMark: 150 },
	{ subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
	{ subject: 'English', A: 86, B: 130, fullMark: 150 },
	{ subject: 'Geography', A: 99, B: 100, fullMark: 150 },
	{ subject: 'Physics', A: 85, B: 90, fullMark: 150 },
	{ subject: 'History', A: 65, B: 85, fullMark: 150 }
];

export default class SimpleRadarChartComponent extends Component {
	render() {
		return (
			<ResponsiveContainer width='100%' height={300}>
				<RadarChart outerRadius={150} data={data}>
					<Radar name="Mike" dataKey="A" stroke={ChartConfig.color.primary} fill={ChartConfig.color.primary} fillOpacity={1} />
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" stroke={ChartConfig.axesColor} />
					<PolarRadiusAxis stroke={ChartConfig.axesColor} />
				</RadarChart>
			</ResponsiveContainer>
		);
	}
}
