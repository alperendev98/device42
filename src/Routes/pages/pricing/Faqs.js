/**
 * Faqs Component
 */
import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardColumns, CardBody } from 'reactstrap';

// api
import api from 'api';

// intl messages
import IntlMessages from 'Util/IntlMessages';

class Faqs extends Component {

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
            <div>
                <div className="text-center py-40">
                    <h2 className="mb-0"><IntlMessages id="widgets.frequentlyAskedQuestions" /></h2>
                </div>
                <div className="faq-wrapper">
                    <CardColumns>
                        {faqs && faqs.map((faq, key) => (
                            <Card key={key}>
                                <CardBody>
                                    <CardTitle>{faq.title}</CardTitle>
                                    <CardText>{faq.content}</CardText>
                                </CardBody>
                            </Card>
                        ))}
                    </CardColumns>
                </div>
            </div>
        );
    }
}

export default Faqs;
