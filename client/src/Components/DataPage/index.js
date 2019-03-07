/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables"
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';


class DataPage extends React.Component {
	constructor() {
		super()
		this.state = {
			type: null,
			currentType: '',
			columns: [],
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

		if (this.props.instances && this.props.instances.length > 0) {
			console.log('load from link')
			this.props.loadData(this.props.instances, type)
		}else {
			console.log('load from reload')
			this.props.loadInstances(type)
		}

	}
	render() {
		
		const options = {
			filterType: 'dropdown',
			fixedHeader: false,
			responsive: 'scroll',
			print: false,
			download: false,
			onRowClick:(rowData, rowMeta) => {
				let instanceAddress = rowData[1]
				let itemId = rowData[2]
				if (instanceAddress) {
					let url = instanceAddress + '/admin/rackraj/' + this.state.currentType +  '/' + itemId
					window.open(url, '_blank')
				}
			}
		};
		return (
			<div className="data-table-wrapper">
				
				<div className="table-responsive">
				
					{this.props.data ? <MUIDataTable
						title={this.state.currentType}
						data={this.props.data}
						columns={this.props.columns}
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
