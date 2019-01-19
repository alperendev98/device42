/**
 * Email Prefrences Page
 */
import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import Button from '@material-ui/core/Button';
import { FormGroup, Input } from 'reactstrap';
import { NotificationManager } from 'react-notifications';
import CircularProgress from '@material-ui/core/CircularProgress';

// intl messages
import IntlMessages from 'Util/IntlMessages';

export default class EmailPrefrences extends Component {

  state = {
    'Features & Announcements': true,
    'Tips & Recommendations': true,
    'Inbox': false,
    'Community Activity': false,
    'Research': true,
    'Newsletter': false,
    loading: false
  }

  // toggle switch
  toggleSwitch = (key) => {
    this.setState({ [key]: !this.state[key] });
  }

  // on save changes
  onSaveChanges() {
    this.setState({ loading: true });
    let self = this;
    setTimeout(() => {
      self.setState({ loading: false });
      NotificationManager.success('Changes Save Successfully!');
    }, 1500);
  }

  render() {
    return (
      <div className="prefrences-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="search-filter p-0 mb-50">
              <form>
                <h2 className="heading"><IntlMessages id="widgets.updateYourEmailAddress" /></h2>
                <FormGroup className="mb-0 w-40">
                  <Input type="search" className="input-lg" name="search" placeholder="info@example.com" />
                </FormGroup>
                <Button  color="primary" className="text-white btn-lg">
                  <IntlMessages id="button.save" />
                </Button>
              </form>
            </div>
            <ul className="list-unstyled">
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Features & Announcements</h5>
                  <p>New products and feature updates, as well as occasional company announcements.</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Features & Announcements')}
                  on={this.state['Features & Announcements']}
                />
              </li>
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Tips & Recommendations</h5>
                  <p>Timely advice to help you make the most of our features.</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Tips & Recommendations')}
                  on={this.state['Tips & Recommendations']}
                />
              </li>
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Inbox</h5>
                  <p>Answers to your questions, comments, chat notifications and more.</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Inbox')}
                  on={this.state['Inbox']}
                />
              </li>
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Community Activity</h5>
                  <p>Notifications about upcoming events & community activity.</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Community Activity')}
                  on={this.state['Community Activity']}
                />
              </li>
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Research</h5>
                  <p>Invitations to participate in surveys, usability tests and more. Only a few per year.</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Research')}
                  on={this.state['Research']}
                />
              </li>
              <li className="d-flex justify-content-between">
                <div className="">
                  <h5>Newsletter</h5>
                  <p>Our best community content of the week/month</p>
                </div>
                <Switch
                  onClick={() => this.toggleSwitch('Newsletter')}
                  on={this.state['Newsletter']}
                />
              </li>
            </ul>
            {this.state.loading ?
              <CircularProgress />
              : <Button  color="primary" className="text-white btn-lg" onClick={() => this.onSaveChanges()}><IntlMessages id="button.saveChanges" /></Button>
            }
          </div>
        </div>
      </div>
    );
  }
}
