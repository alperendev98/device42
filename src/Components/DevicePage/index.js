/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables";
// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class DevicePage extends React.Component {
	constructor() {
		super()
		this.state = {
			deviceData: []
		}
	}
	componentDidMount() {
		this.props.loadDevice(['http://151.181.77.119', 'http://151.181.77.121'])
	}

	componentDidUpdate (prevProps, prevState) {
		if (prevProps.devices !== this.props.devices) {
			this.convertDeviceData()
		}
	}

	convertDeviceData() {

		var deviceData = []
		console.log('ddd' + JSON.stringify(this.props.devices))
		if (this.props.devices) {

			const devicesArray = this.props.devices

			for (var k=0; k < devicesArray.length; k++) {
				const devices = devicesArray[k]
				for (var i=0; i < devices.length; i++) {
					let deviceItem = devices[i]
	
					let hardware = ''
					if (deviceItem.v_name === null && deviceItem.h_name === null) {
						hardware = '(None)'
					}else if (deviceItem.v_name === null) {
						hardware = deviceItem.h_name
					}else if (deviceItem.h_name === null) {
						hardware = deviceItem.v_name
					}else {
						hardware = deviceItem.h_name + ', ' + deviceItem.v_name
					}
	
					let location = ''
					if (deviceItem.ra_name === null && deviceItem.r_name === null) {
						location = ''
					}else if (deviceItem.ra_name === null) {
						location = deviceItem.r_name
					}else if (deviceItem.r_name === null) {
						location = deviceItem.ra_name
					}else {
						location = deviceItem.ra_name + ' - ' + deviceItem.r_name
					}
	
					let customer = deviceItem.c_name === null ? '(None)' : deviceItem.c_name
	
					let in_service = deviceItem.in_service ? 'true' : 'false'
					deviceData.push([deviceItem.name, deviceItem.type, deviceItem.service_level, in_service, deviceItem.asset_no, deviceItem.serial_no,
						location,  hardware, deviceItem.o_name, customer])
				}
			}	
			console.log('fff' + JSON.stringify(deviceData))
			
			this.setState({deviceData: deviceData})
		}
	}
	
	render() {
		const columns = [ 
			{
				name: "Name",
				options: {
					filter: false
				}
			}, 
			"Type", "Service Level", "In Service", 
			{
				name: "Asset #",
				options: {
					filter: false
				}
			},
			"Serial #", "Location", "Hardware", "OS", "Customer"];
		
		const options = {
			filterType: 'dropdown',
			fixedHeader: false,
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				<PageTitleBar title={<IntlMessages id="device.maintitle" />} match={this.props.match} />
				
				<div className="table-responsive">
				
					{this.props.devices ? <MUIDataTable
						data={this.state.deviceData}
						columns={columns}
						options={options}
					/> : ''}
				</div>
			</div>
		);
	}
}

export default DevicePage;
