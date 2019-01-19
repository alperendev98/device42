/*====== Vertical Stapper =====*/
import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function getSteps() {
	return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
	switch (step) {
		case 0:
			return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
		case 1:
			return 'An ad group contains one or more ads which target a shared set of keywords.';
		case 2:
			return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
		default:
			return 'Unknown step';
	}
}

export default class VerticalLinearStepper extends React.Component {
	state = {
		activeStep: 0,
	};

	handleNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1,
		});
	};

	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1,
		});
	};

	handleReset = () => {
		this.setState({
			activeStep: 0,
		});
	};

	render() {
		const steps = getSteps();
		const { activeStep } = this.state;

		return (
			<div>
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((label, index) => {
						return (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
								<StepContent>
									<p>{getStepContent(index)}</p>
									<div>
										<Button  className="btn-danger text-white mr-10 mb-10" disabled={activeStep === 0} onClick={this.handleBack}>
											Back
                    </Button>
										<Button  color="primary" className="text-white mr-10 mb-10" onClick={this.handleNext}>
											{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
										</Button>
									</div>
								</StepContent>
							</Step>
						);
					})}
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} className="pl-40">
						<p>All steps completed - you&quot;re finished</p>
						<Button  className="btn-success text-white mr-10 mb-10" onClick={this.handleReset}>
							Reset
            		</Button>
					</Paper>
				)}
			</div>
		);
	}
}
