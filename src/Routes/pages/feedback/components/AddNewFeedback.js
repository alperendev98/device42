/**
 * Add New Feedback
 */
import React, { Component } from 'react';
import { Input, Form, Label, Col, FormGroup } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// redux actions
import { addNewFeedback, showFeedbackLoadingIndicator } from 'Actions';

class AddNewFeedback extends Component {

    state = {
        newIdea: '',
        description: ''
    }

    /**
     * Add New Feedback
     */
    addNewFeedback() {
        const { newIdea, description } = this.state;
        let currentTime = new Date();
        if (newIdea !== '' && description !== '') {
            let data = {
                id: currentTime.getTime(),
                idea: newIdea,
                description,
                userAvatar: require('assets/avatars/user-1.jpg'),
                userName: 'Admin',
                time: 'Just Now',
                planned: false,
                inProgress: false,
                liked: false,
                deleted: false,
                comments: []
            }
            this.props.showFeedbackLoadingIndicator();
            let self = this;
            setTimeout(() => {
                self.props.addNewFeedback(data);
            }, 1500);
            this.setState({ newIdea: '', description: '' });
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-10 col-lg-7">
                    <h2 className="heading mb-40">We had love your feedback on how to improve our web app.</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="idea" sm={3}>Idea</Label>
                            <Col sm={9}>
                                <Input type="text" name="idea" id="idea" className="input-lg" onChange={(e) => this.setState({ newIdea: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="description" sm={3}>Description</Label>
                            <Col sm={9}>
                                <Input type="textarea" rows="7" name="description" id="description" onChange={(e) => this.setState({ description: e.target.value })} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label sm={3}>&nbsp;</Label>
                            <Col sm={9}>
                                <Button  className="btn-primary text-white" onClick={() => this.addNewFeedback()}>Save</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ feedback }) => {
    return feedback;
}

export default connect(mapStateToProps, {
    addNewFeedback,
    showFeedbackLoadingIndicator
})(AddNewFeedback);
