import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class Components extends React.Component {
	state = {
		name: 'Composed TextField',
	};
	handleChange = event => {
		this.setState({ name: event.target.value });
	};

	render() {
		return (
			<form noValidate autoComplete="off">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-xl-3">
						<FormControl fullWidth>
							<InputLabel htmlFor="name-simple">Name</InputLabel>
							<Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
						</FormControl>
					</div>
					<div className="col-sm-6 col-md-6 col-xl-3">
						<FormControl fullWidth aria-describedby="name-helper-text">
							<InputLabel htmlFor="name-helper">Name</InputLabel>
							<Input id="name-helper" value={this.state.name} onChange={this.handleChange} />
							<FormHelperText id="name-helper-text">Some important helper text</FormHelperText>
						</FormControl>
					</div>
					<div className="col-sm-6 col-md-6 col-xl-3">
						<FormControl disabled fullWidth>
							<InputLabel htmlFor="name-disabled">Name</InputLabel>
							<Input id="name-disabled" value={this.state.name} onChange={this.handleChange} />
							<FormHelperText>Disabled</FormHelperText>
						</FormControl>
					</div>
					<div className="col-sm-6 col-md-6 col-xl-3">
						<FormControl error aria-describedby="name-error-text" fullWidth>
							<InputLabel htmlFor="name-error">Name</InputLabel>
							<Input id="name-error" value={this.state.name} onChange={this.handleChange} />
							<FormHelperText id="name-error-text">Error</FormHelperText>
						</FormControl>
					</div>
				</div>
			</form>
		);
	}
}
