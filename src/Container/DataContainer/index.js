import {connect} from 'react-redux';
import DataPage from "Components/DataPage";

// redux action 
import {
	loadData,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user } = authUser;
	const { data } = allData
	return { user, data }
}

const DataContainer = connect(mapStateToProps, {
	loadData,
})(DataPage);

export default DataContainer