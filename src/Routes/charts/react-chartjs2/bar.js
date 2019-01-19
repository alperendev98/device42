import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Series A',
			backgroundColor: ChartConfig.color.primary,
			borderColor: ChartConfig.color.primary,
			borderWidth: 1,
			hoverBackgroundColor: ChartConfig.color.primary,
			hoverBorderColor: ChartConfig.color.primary,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
}

const options = {
	legend: {
		labels: {
			fontColor: ChartConfig.legendFontColor
		}
	},
	scales: {
		xAxes: [{
			gridLines: {
				color: ChartConfig.chartGridColor
			},
			ticks: {
				fontColor: ChartConfig.axesColor
			}
		}],
		yAxes: [{
			gridLines: {
				color: ChartConfig.chartGridColor
			},
			ticks: {
				fontColor: ChartConfig.axesColor
			}
		}]
	}
};

export default class BarChart extends Component {

	render() {
		return (
			<Bar data={data} options={options} />
		);
	}
}
