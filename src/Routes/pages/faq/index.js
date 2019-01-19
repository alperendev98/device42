/**
 * Faq Page
 */
import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { Helmet } from "react-helmet";
// api
import api from 'api';

//Components
import SearchIdeas from './components/SearchIdeas';

class Faq extends Component {

	state = {
		faqs: null
	}

	componentDidMount() {
		this.getFaqs();
	}

	// get faqs
	getFaqs() {
		api.get('faqs.js')
			.then((response) => {
				this.setState({ faqs: response.data });
			})
			.catch(error => {
				// error handling
			})
	}

	render() {
		const { faqs } = this.state;
		return (
			<div className="faq-page-wrapper">
				<Helmet>
					<title>Faqs</title>
					<meta name="description" content="Device42 Faqs Page" />
				</Helmet>
				<SearchIdeas />
				{faqs && faqs.map((faq, key) => (
					<ExpansionPanel key={key} className="mb-30 panel" defaultExpanded>
						<ExpansionPanelSummary expandIcon={<i className="zmdi zmdi-chevron-down"></i>} className="m-0 panel-heading">
							<h4>{faq.title}</h4>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
							<p>
								{faq.content}
							</p>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				))}
			</div>
		)
	}
}

export default Faq;
