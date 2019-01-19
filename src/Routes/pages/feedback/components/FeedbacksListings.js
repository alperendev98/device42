/**
 * Feedbacks Listings
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import DeleteConfirmationDialog from 'Components/DeleteConfirmationDialog/DeleteConfirmationDialog';

// actions
import {
    onFeedbackFavorite,
    onDeleteFeedback,
    viewFeedbackDetails,
    showFeedbackLoadingIndicator,
    replyFeedback,
    sendReply
} from 'Actions';

// components
import FeedbacksListItem from './FeedbacksListItem';

class FeedbacksListing extends Component {

    state = {
        deleteFeedback: null
    }

    /**
     * On Feedback Favorite
     */
    onFeedbackFavorite(feedback) {
        this.props.onFeedbackFavorite(feedback);
    }

    /**
     * On Delete Feedback
     */
    onDeleteFeedback(feedback) {
        this.refs.deleteConfirmation.open();
        this.setState({ deleteFeedback: feedback });
    }

    /**
     * Delete Feedback After Alert
     */
    deleteFeedback() {
        this.refs.deleteConfirmation.close();
        this.props.showFeedbackLoadingIndicator();
        let self = this;
        setTimeout(() => {
            self.props.onDeleteFeedback(this.state.deleteFeedback);
        }, 1500);
    }

    /**
     * View Feedback Details
     */
    viewFeedbackDetails(feedback) {
        this.props.showFeedbackLoadingIndicator();
        let self = this;
        setTimeout(() => {
            self.props.viewFeedbackDetails(feedback);
        }, 1500);
    }

    /**
     * Reply Feedback
     */
    replyFeedback(feedback) {
        this.props.replyFeedback(feedback);
    }

    /**
     * Send Reply
     */
    onReplySend(feedback) {
        this.props.showFeedbackLoadingIndicator();
        let self = this;
        setTimeout(() => {
            self.props.sendReply(feedback);
        }, 1500);
    }

    render() {
        const { feedbacks } = this.props;
        return (
            <div>
                <ul className="list-unstyled mb-0">
                    {feedbacks && feedbacks.map((feedback, key) => (
                        <FeedbacksListItem
                            data={feedback}
                            key={key}
                            onFeedbackFavorite={() => this.onFeedbackFavorite(feedback)}
                            onDeleteFeedback={() => this.onDeleteFeedback(feedback)}
                            viewFeedbackDetails={() => this.viewFeedbackDetails(feedback)}
                            onReply={() => this.replyFeedback(feedback)}
                            onReplySend={() => this.onReplySend(feedback)}
                        />
                    ))}
                </ul>
                <DeleteConfirmationDialog
                    ref="deleteConfirmation"
                    title="Are you sure want to delete?"
                    message="This will delete permanently your feedback from feedback list."
                    onConfirm={() => this.deleteFeedback()}
                />
            </div>
        );
    }
}

// map state to props
const mapStateToProps = ({ feedback }) => {
    return feedback;
}

export default connect(mapStateToProps, {
    onFeedbackFavorite,
    onDeleteFeedback,
    viewFeedbackDetails,
    showFeedbackLoadingIndicator,
    replyFeedback,
    sendReply
})(FeedbacksListing);
