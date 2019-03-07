import {connect} from 'react-redux';
import DataPage from "Components/DataPage";

// redux action 
import {
	loadData,
	loadInstances,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user, instances } = authUser;
	const { data, loading, columns } = allData
	return { user, data, loading, instances, columns }
}

const DataContainer = connect(mapStateToProps, {
	loadData,
	loadInstances,
})(DataPage);

export default DataContainer