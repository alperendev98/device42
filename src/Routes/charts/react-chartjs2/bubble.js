import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: ['January'],
	datasets: [
		{
			label: 'Series A',
			data: [
				{
					x: 1,
					y: 2,
					r: 5
				}
			],
			backgroundColor: ChartConfig.color.primary,
			hoverBackgroundColor: ChartConfig.color.primary
		},
		{
			label: 'Series A',
			data: [
				{
					x: 1,
					y: 8,
					r: 7
				}
			],
			backgroundColor: ChartConfig.color.info,
			hoverBackgroundColor: ChartConfig.color.info
		},
		{
			label: 'Series A',
			data: [
				{
					x: 3,
					y: 6,
					r: 12
				}
			],
			backgroundColor: ChartConfig.color.danger,
			hoverBackgroundColor: ChartConfig.color.danger
		},
		{
			label: 'Series A',
			data: [
				{
					x: 5,
					y: 8,
					r: 18
				}
			],
			backgroundColor: ChartConfig.color.primary,
			hoverBackgroundColor: ChartConfig.color.primary
		},
		{
			label: 'Series A',
			data: [
				{
					x: 7,
					y: 4,
					r: 12
				}
			],
			backgroundColor: ChartConfig.color.primary,
			hoverBackgroundColor: ChartConfig.color.primary
		},
		{
			label: 'Series A',
			data: [
				{
					x: 9,
					y: 2,
					r: 7
				}
			],
			backgroundColor: ChartConfig.color.primary,
			hoverBackgroundColor: ChartConfig.color.primary
		},
		{
			label: 'Series A',
			data: [
				{
					x: 9,
					y: 9,
					r: 5
				}
			],
			backgroundColor: ChartConfig.color.primary,
			hoverBackgroundColor: ChartConfig.color.primary
		}
	]
};

const options = {
	legend: {
		display: false
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

export default class BuubleChart extends Component {
	render() {
		return (
			<Bubble data={data} options={options} />
		);
	}
}
