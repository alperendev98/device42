import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

// Function to convert hex color code into rgba
const hexToRgbA = (hex) => {
	var c;
	if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
		c = hex.substring(1).split('');
		if (c.length === 3) {
			c = [c[0], c[0], c[1], c[1], c[2], c[2]];
		}
		c = '0x' + c.join('');
		return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',0.8)';
	}
	throw new Error('Bad Hex');
}

const data = {
	labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
	datasets: [
		{
			label: 'Series A',
			backgroundColor: hexToRgbA(ChartConfig.color.primary),
			borderColor: hexToRgbA(ChartConfig.color.primary),
			pointBackgroundColor: hexToRgbA(ChartConfig.color.primary),
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: hexToRgbA(ChartConfig.color.primary),
			data: [65, 59, 90, 81, 56, 55, 40]
		},
		{
			label: 'Series B',
			backgroundColor: hexToRgbA(ChartConfig.color.warning),
			borderColor: hexToRgbA(ChartConfig.color.warning),
			pointBackgroundColor: hexToRgbA(ChartConfig.color.warning),
			pointBorderColor: '#fff',
			pointHoverBackgroundColor: '#fff',
			pointHoverBorderColor: hexToRgbA(ChartConfig.color.warning),
			data: [28, 48, 40, 19, 96, 27, 100]
		}
	]
};

const options = {
	legend: {
		labels: {
			fontColor: ChartConfig.legendFontColor
		}
	}
};

export default class RadarChart extends Component {

	render() {
		return (
			<Radar data={data} options={options} />
		);
	}
}
