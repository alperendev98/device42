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
  { name: 'Page A', seriesA: 6000, seriesB: 8000 },
  { name: 'Page B', seriesA: 3000, seriesB: 1398 },
  { name: 'Page C', seriesA: 2000, seriesB: 9800 },
  { name: 'Page D', seriesA: 2780, seriesB: 3908 },
  { name: 'Page E', seriesA: 1890, seriesB: 4800 },
  { name: 'Page F', seriesA: 2390, seriesB: 5500 },
  { name: 'Page G', seriesA: 3490, seriesB: 8800 },
];

class SimpleBarChartComponent extends Component {
  render() {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke={ChartConfig.axesColor} />
          <YAxis stroke={ChartConfig.axesColor} />
          <CartesianGrid vertical={false} stroke={ChartConfig.chartGridColor} />
          <Tooltip wrapperStyle={tooltipStyle} cursor={false} itemStyle={tooltipTextStyle} labelStyle={{ display: 'none' }} />
          <Legend />
          <Bar dataKey="seriesB" fill={ChartConfig.color.primary} />
          <Bar dataKey="seriesA" fill={ChartConfig.color.info} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default SimpleBarChartComponent;
