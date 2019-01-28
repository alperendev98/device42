/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables"

import config from 'config';
import {getColumnByType} from 'Util/TableColumn'
class DataPage extends React.Component {
	constructor() {
		super()
		this.state = {
			data: [],
			type: null,
			currentType: '',
		}
	}
	
	componentWillReceiveProps(newProps) {

		if (this.state.currentType !== newProps.match.params.type) {
			this.setState({currentType: newProps.match.params.type})
			this.props.loadData(config.instances, newProps.match.params.type)
		}
		
	}
	render() {
		const columns = getColumnByType(this.props.match.params.type)
		console.log('resutl' + JSON.stringify(columns))
		const options = {
			filterType: 'dropdown',
			fixedHeader: false,
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				
				<div className="table-responsive">
				
					{this.props.data && columns !== null ? <MUIDataTable
						data={this.props.data}
						columns={columns}
						options={options}
					/> : ''}
				</div>
			</div>
		);
	}
}

export default DataPage;
