import {connect} from 'react-redux';
import DataPage from "Components/DataPage";

// redux action 
import {
	loadAsset,
	loadDevice,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allAsset, allDevice }) => {
	const { user } = authUser;
	const { assets } = allAsset
	const { devices } = allDevice
	return { user, assets, devices }
}

const DataContainer = connect(mapStateToProps, {
	loadAsset,
	loadDevice,
})(DataPage);

export default DataContainer