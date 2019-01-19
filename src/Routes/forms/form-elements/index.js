/**
 * Form Elemets
 */
import React, { Component } from 'react';
import {
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	FormText,
	Col,
	FormFeedback
} from 'reactstrap';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box

import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

export default class FormElements extends Component {
	state = {
		dataSource: [],
	};

	handleUpdateInput = (value) => {
		this.setState({
			dataSource: [
				value,
				value + value,
				value + value + value,
			],
		});
	};

	render() {
		return (
			<div className="formelements-wrapper">
				<PageTitleBar title={<IntlMessages id="sidebar.formElements" />} match={this.props.match} />
				<div className="row">
					<div className="col-sm-12 col-md-12 col-xl-6">
						<RctCollapsibleCard heading="Default React Form">
							<Form>
								<FormGroup>
									<Label for="Email">Email</Label>
									<Input type="email" name="email" id="Email" placeholder="Email address" />
								</FormGroup>
								<FormGroup>
									<Label for="Password">Password</Label>
									<Input type="password" name="password" id="Password" placeholder="password" />
								</FormGroup>
								<FormGroup>
									<Label for="Select">Select</Label>
									<Input type="select" name="select" id="Select">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="SelectMulti">Select Multiple</Label>
									<Input type="select" name="selectMulti" id="SelectMulti" multiple>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="Text">Text Area</Label>
									<Input type="textarea" name="text" id="Text" />
								</FormGroup>
								<FormGroup>
									<Label for="File">File</Label>
									<Input type="file" name="file" id="File" />
									<FormText color="muted">
										This is some placeholder block-level help text for the above input.
                        Its a bit lighter and easily wraps to a new line.
                      </FormText>
								</FormGroup>
								<FormGroup tag="fieldset">
									<legend>Radio Buttons</legend>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio1" />{' '}
											Option one is this and that—be sure to include why its great
                        </Label>
									</FormGroup>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio1" />{' '}
											Option two can be something else and selecting it will deselect option one
                        </Label>
									</FormGroup>
									<FormGroup check disabled>
										<Label check>
											<Input type="radio" name="radio1" disabled />{' '}
											Option three is disabled
                        </Label>
									</FormGroup>
								</FormGroup>
								<FormGroup check className="mb-20">
									<Label check>
										<Input type="checkbox" />{' '}
										Check me out
                      </Label>
								</FormGroup>
								<Button color="primary">Submit</Button>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Form Grid">
							<Form>
								<FormGroup row>
									<Label for="Email-1" sm={2}>Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="Email-1" placeholder="Email address" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="Password-1" sm={2}>Password</Label>
									<Col sm={10}>
										<Input type="password" name="password" id="Password-1" placeholder="password" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="Select-1" sm={2}>Select</Label>
									<Col sm={10}>
										<Input type="select" name="select" id="Select-1" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="SelectMulti-2" sm={2}>Select Multiple</Label>
									<Col sm={10}>
										<Input type="select" name="selectMulti" id="SelectMulti-2" multiple />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="Text-1" sm={2}>Text Area</Label>
									<Col sm={10}>
										<Input type="textarea" name="text" id="Text-1" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="File-1" sm={2}>File</Label>
									<Col sm={10}>
										<Input type="file" name="file" id="File-1" />
										<FormText color="muted">
											This is some placeholder block-level help text for the above input.
                          Its a bit lighter and easily wraps to a new line.
                        </FormText>
									</Col>
								</FormGroup>
								<FormGroup tag="fieldset">
									<legend className="col-form-label">Radio Buttons</legend>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio2" />{' '}
											Option one is this and that—be sure to include why its great
                        </Label>
									</FormGroup>
									<FormGroup check>
										<Label check>
											<Input type="radio" name="radio2" />{' '}
											Option two can be something else and selecting it will deselect option one
                        </Label>
									</FormGroup>
									<FormGroup check disabled>
										<Label check>
											<Input type="radio" name="radio2" disabled />{' '}
											Option three is disabled
                        </Label>
									</FormGroup>
								</FormGroup>
								<FormGroup row>
									<Label for="checkbox2" sm={2}>Checkbox</Label>
									<Col sm={{ size: 10 }}>
										<FormGroup check>
											<Label check>
												<Input type="checkbox" id="checkbox2" />{' '}
												Check me out
                          </Label>
										</FormGroup>
									</Col>
								</FormGroup>
								<FormGroup check className="p-0">
									<Button color="primary">Submit</Button>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Inline Form">
							<Form inline>
								<FormGroup className="mb-10 mr-sm-10 mb-sm-0">
									<Label for="Email-2" className="mr-sm-10">Email</Label>
									<Input type="email" name="email" id="Email-2" placeholder="something@idk.cool" />
								</FormGroup>
								<FormGroup className="mb-10 mr-sm-10 mb-sm-0">
									<Label for="Password-2" className="mr-sm-10">Password</Label>
									<Input type="password" name="password" id="Password-2" placeholder="don't tell!" />
								</FormGroup>
								<Button color="primary">Submit</Button>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Input Sizing">
							<Form>
								<Input className="mb-20" placeholder="lg" bsSize="lg" />
								<Input className="mb-20" placeholder="sm" bsSize="sm" />
								<Input className="mb-20" type="select" bsSize="lg"><option>Large Select</option></Input>
								<Input className="mb-20" type="select" bsSize="sm"><option>Small Select</option></Input>
							</Form>
						</RctCollapsibleCard>
					</div>
					<div className="col-sm-12 col-md-12 col-xl-6">
						<RctCollapsibleCard heading="Input Types">
							<Form>
								<FormGroup>
									<Label for="Email-3">Email</Label>
									<Input type="email" name="email" id="Email-3" placeholder="with a placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="Password-3">Password</Label>
									<Input type="password" name="password" id="Password-3" placeholder="password placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleUrl">Url</Label>
									<Input type="url" name="url" id="exampleUrl" placeholder="url placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleNumber">Number</Label>
									<Input type="number" name="number" id="exampleNumber" placeholder="number placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleDatetime">Datetime</Label>
									<Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleDate">Date</Label>
									<Input type="date" name="date" id="exampleDate" placeholder="date placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleTime">Time</Label>
									<Input type="time" name="time" id="exampleTime" placeholder="time placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleColor">Color</Label>
									<Input type="color" name="color" id="exampleColor" placeholder="color placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="exampleSearch">Search</Label>
									<Input type="search" name="search" id="exampleSearch" placeholder="search placeholder" />
								</FormGroup>
								<FormGroup>
									<Label for="Select-2">Select</Label>
									<Input type="select" name="select" id="Select-2">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="exampleSelectMulti">Select Multiple</Label>
									<Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="Text-2">Text Area</Label>
									<Input type="textarea" name="text" id="Text-2" />
								</FormGroup>
								<FormGroup>
									<Label for="File-2">File</Label>
									<Input type="file" name="file" id="File-2" />
									<FormText color="muted">
										This is some placeholder block-level help text for the above input.
                        Its a bit lighter and easily wraps to a new line.
                      </FormText>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="radio" />{' '}
										Option one is this and that—be sure to include why its great
                      </Label>
								</FormGroup>
								<FormGroup check>
									<Label check>
										<Input type="checkbox" />{' '}
										Check me out
                      </Label>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Form Validation">
							<Form>
								<FormGroup>
									<Label for="Email-4">Input with success</Label>
									<Input valid />
									<FormText>Example help text that remains unchanged.</FormText>
								</FormGroup>
								<FormGroup>
									<Label for="Password-4">Input with danger</Label>
									<Input valid={false} />
									<FormFeedback>Oh noes! that name is already taken</FormFeedback>
									<FormText>Example help text that remains unchanged.</FormText>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Input Grid Sizing">
							<Form>
								<FormGroup row>
									<Label for="Email-5" sm={2} size="lg">Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="Email-5" placeholder="lg" bsSize="lg" />
									</Col>
								</FormGroup>
								<FormGroup row>
									<Label for="Email-6" sm={2}>Email</Label>
									<Col sm={10}>
										<Input type="email" name="email" id="Email-6" placeholder="default" />
									</Col>
								</FormGroup>
							</Form>
						</RctCollapsibleCard>
						<RctCollapsibleCard heading="Hidden Labels">
							<Form inline>
								<FormGroup className="mr-10 mb-10">
									<Label for="Email-7" hidden>Email</Label>
									<Input type="email" name="email" id="Email-7" placeholder="Email" />
								</FormGroup>
								<FormGroup className="mr-10 mb-10">
									<Label for="Password-7" hidden>Password</Label>
									<Input type="password" name="password" id="Password-7" placeholder="Password" />
								</FormGroup>
								<Button className="mb-10" color="primary">Submit</Button>
							</Form>
						</RctCollapsibleCard>
					</div>
				</div>
			</div>
		);
	}
}
