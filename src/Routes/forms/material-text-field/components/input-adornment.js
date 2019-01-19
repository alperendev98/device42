import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export default class InputAdornments extends React.Component {

	state = {
		amount: '',
		password: '',
		weight: '',
		showPassword: false,
	};

	handleChange = prop => event => {
		this.setState({ [prop]: event.target.value });
	};

	handleMouseDownPassword = event => {
		event.preventDefault();
	};

	handleClickShowPasssword = () => {
		this.setState({ showPassword: !this.state.showPassword });
	};

	render() {
		return (
			<form noValidate autoComplete="off">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-xl-4">
						<FormControl fullWidth>
							<InputLabel htmlFor="amount">Amount</InputLabel>
							<Input
								id="adornment-amount"
								value={this.state.amount}
								onChange={this.handleChange('amount')}
								startAdornment={<InputAdornment position="start">$</InputAdornment>}
							/>
						</FormControl>
					</div>
					<div className="col-sm-6 col-md-6 col-xl-4">
						<FormControl aria-describedby="weight-helper-text" fullWidth>
							<Input
								id="adornment-weight"
								value={this.state.weight}
								onChange={this.handleChange('weight')}
								endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
							/>
							<FormHelperText id="weight-helper-text">Weight</FormHelperText>
						</FormControl>
					</div>
					<div className="col-sm-6 col-md-6 col-xl-4">
						<FormControl fullWidth>
							<InputLabel htmlFor="password">Password</InputLabel>
							<Input
								id="adornment-password"
								type={this.state.showPassword ? 'text' : 'password'}
								value={this.state.password}
								onChange={this.handleChange('password')}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											onClick={this.handleClickShowPasssword}
											onMouseDown={this.handleMouseDownPassword}
										>
											{this.state.showPassword ? <i className="zmdi zmdi-eye-off"></i> : <i className="zmdi zmdi-eye"></i>}
										</IconButton>
									</InputAdornment>
								}
							/>
						</FormControl>
					</div>
				</div>
			</form>
		);
	}
}
