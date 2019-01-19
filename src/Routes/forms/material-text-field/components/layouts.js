import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class Layouts extends React.Component {
	render() {
		return (
			<form noValidate autoComplete="off">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-xl-4">
						<TextField fullWidth label="None" id="margin-none" defaultValue="Default Value" helperText="Some important text" />
					</div>
					<div className="col-sm-6 col-md-6 col-xl-4">
						<TextField fullWidth label="Dense" id="margin-dense" defaultValue="Default Value" helperText="Some important text" margin="dense" />
					</div>
					<div className="col-sm-6 col-md-6 col-xl-4">
						<TextField fullWidth label="Normal" id="margin-normal" defaultValue="Default Value" helperText="Some important text" margin="normal" />
					</div>
				</div>
			</form>
		);
	}
}
