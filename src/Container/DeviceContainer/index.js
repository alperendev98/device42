import {connect} from 'react-redux';
import DevicePage from "Components/DevicePage";

// redux action 
import {
	loadDevice,
} from 'Actions'

// map state to props
const mapStateToProps = ({ authUser, allDevice }) => {
	const { user } = authUser;
	const { devices, loading } = allDevice
	return { user, loading, devices }
}

const DeviceContainer = connect(mapStateToProps, {
    loadDevice,	
})(DevicePage);

export default DeviceContainer