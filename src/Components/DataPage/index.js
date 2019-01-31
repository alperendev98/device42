/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables"
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

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

	componentDidMount() {
		if (this.state.currentType !== this.props.match.params.type) {
			this.loadData(this.props.match.params.type)
			
		}	
	}
	
	componentWillReceiveProps(newProps) {

		if (this.state.currentType !== newProps.match.params.type && !newProps.loading) {
			this.loadData(newProps.match.params.type)
			
		}
		
	}

	loadData = (type) => {
		this.setState({currentType: type})

		if (localStorage.getItem('instances')) {
			this.props.loadData(JSON.parse(localStorage.getItem('instances')), type)
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

				{this.props.loading &&
					<RctSectionLoader />
				}
			</div>
		);
	}
}

export default DataPage;
