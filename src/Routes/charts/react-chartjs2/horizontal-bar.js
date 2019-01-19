import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Series A',
			backgroundColor: ChartConfig.color.info,
			borderColor: ChartConfig.color.info,
			borderWidth: 1,
			hoverBackgroundColor: ChartConfig.color.info,
			hoverBorderColor: ChartConfig.color.info,
			data: [65, 59, 80, 81, 56, 55, 40]
		}
	]
};

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

export default class HorizontalBarChart extends Component {

	render() {
		return (
			<HorizontalBar data={data} options={options} />
		);
	}
}
