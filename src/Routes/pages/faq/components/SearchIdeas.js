/**
 * Search Ideas
 */
import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

// actions
import { updateSearchIdeas, onSearchIdeas, showFeedbackLoadingIndicator } from 'Actions';

// rct card
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';

class SearchIdeas extends Component {

    /**
     * On Search Idea
     */
    onUpdateSearchIdeas(e) {
        this.props.updateSearchIdeas(e.target.value);
    }

    /**
     * On Search Ideas
     */
    onSearchIdeas() {
        this.props.showFeedbackLoadingIndicator();
        const { searchIdeaText } = this.props;
        let self = this;
        setTimeout(() => {
            self.props.onSearchIdeas(searchIdeaText);
        }, 1500);
    }

    render() {
        const { searchIdeaText } = this.props;
        return (
            <RctCollapsibleCard customClasses="search-filter">
                <form>
                    <h2 className="heading mb-30">Type Your Question</h2>
                    <FormGroup className="mb-0 w-40">
                        <Input
                            type="text"
                            name="search"
                            onChange={(e) => this.onUpdateSearchIdeas(e)}
                            value={searchIdeaText}
                        />
                    </FormGroup>
                    <Button  color="primary" className="text-white" onClick={() => this.onSearchIdeas()}>Search</Button>
                </form>
            </RctCollapsibleCard>
        );
    }
}

// map state to props
const mapStateToProps = ({ feedback }) => {
    return feedback;
}

export default connect(mapStateToProps, {
    updateSearchIdeas,
    onSearchIdeas,
    showFeedbackLoadingIndicator
})(SearchIdeas);
