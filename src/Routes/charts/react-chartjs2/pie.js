import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: [
		'primary',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			ChartConfig.color.primary,
			ChartConfig.color.info,
			ChartConfig.color.warning
		],
		hoverBackgroundColor: [
			ChartConfig.color.primary,
			ChartConfig.color.info,
			ChartConfig.color.warning
		]
	}]
};

const options = {
	legend: {
		labels: {
			fontColor: ChartConfig.legendFontColor
		}
	}
};

export default class PieChart extends Component {

	render() {
		return (
			<Pie data={data} options={options} />
		);
	}
}
