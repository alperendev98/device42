/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables"

import config from 'config.json';
import {convertData} from 'Util/ConvertData'
import {getColumnByType} from 'Util/TableColumn'
class DataPage extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			type: null,
		}
	}
	componentDidMount() {
		if (this.props.match.params.type === 'asset') {
			this.props.loadAsset(config.instances)
			console.log('asset')
		}else if (this.props.match.params.type === 'device') {
			this.props.loadDevice(config.instances)
			console.log('device')
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.match.params.type === 'asset' && nextProps.assets === this.props.assets) {
			this.props.loadAsset(config.instances)
			console.log('asset')
		}else if (nextProps.match.params.type === 'device'  && nextProps.devices === this.props.devices) {
			this.props.loadDevice(config.instances)
			console.log('device')
		}
	}

	componentDidUpdate (prevProps, prevState) {
		if (this.props.match.params.type === 'asset') {
			if (prevProps.assets !== this.props.assets) {
				this.convertDeviceData()
			}
			
		}else if (this.props.match.params.type === 'device') {
			if (prevProps.devices !== this.props.devices) {
				this.convertDeviceData()
			}
		}
		
	}

	convertDeviceData = () => {

		var data = []
		if (this.props.match.params.type === 'asset') {
			if (this.props.assets) {

				data = convertData('asset', this.props.assets)
				this.setState({data: data, type : 'asset'})
			}
		}else if (this.props.match.params.type === 'device') {
			if (this.props.devices) {

				data = convertData('device', this.props.devices)
				
				this.setState({data: data, type : 'device'})
			}
		}
		
	}
	
	render() {
		const columns = this.state.type ? getColumnByType(this.state.type) : null
		
		const options = {
			filterType: 'dropdown',
			fixedHeader: false,
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				
				<div className="table-responsive">
				
					{this.state.data && columns !== null ? <MUIDataTable
						data={this.state.data}
						columns={columns}
						options={options}
					/> : ''}
				</div>
			</div>
		);
	}
}

export default DataPage;
