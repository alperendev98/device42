import {connect} from 'react-redux';
import Setting from "Components/Setting";

// redux action 
import {
	loadData,
	loadInstances,
	addNewInstance,
	deleteInstance,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allData }) => {
	const { user, instances } = authUser;
	const { data, loading } = allData
	return { user, data, loading, instances }
}

const SettingContainer = connect(mapStateToProps, {
	loadData,
	loadInstances,
	addNewInstance,
	deleteInstance,
})(Setting);

export default SettingContainer