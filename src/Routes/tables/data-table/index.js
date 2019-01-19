/**
 * Data Table
 */
import React from 'react';
import MUIDataTable from "mui-datatables";

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class DataTable extends React.Component {
	render() {
		const columns = ["Name", "Title", "Location", "Age", "Salary"];
		const data = [
			["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
			["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
			["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
			["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
			["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
			["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
			["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
			["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
			["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
			["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
			["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
			["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
			["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
			["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
			["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
			["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
			["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
			["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
			["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
			["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
			["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
			["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
			["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
			["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
			["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
			["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
			["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
			["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
			["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
			["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
		];
		const options = {
			filterType: 'dropdown',
			responsive: 'stacked'
		};
		return (
			<div className="data-table-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.dataTable" />} match={this.props.match} />
				<div className="alert alert-info">
					<p>MUI-Datatables is a data tables component built on Material-UI V1.
            It comes with features like filtering, view/hide columns, search, export to CSV download, printing, pagination, and sorting.
            On top of the ability to customize styling on most views, there are two responsive modes "stacked" and "scroll" for mobile/tablet
            devices. If you want more customize option please <a href="https://github.com/gregnb/mui-datatables" className="btn btn-danger btn-small mx-10">Click </a> here</p>
				</div>
				<RctCollapsibleCard heading="Data Table" fullBlock>
					<MUIDataTable
						title={"Employee list"}
						data={data}
						columns={columns}
						options={options}
					/>
				</RctCollapsibleCard>
			</div>
		);
	}
}

export default DataTable;
