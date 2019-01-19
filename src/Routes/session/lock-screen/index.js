import React, { Component } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

// app config
import AppConfig from 'Constants/AppConfig';

export default class LockScreen extends Component {
  render() {
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper" key="1">
          <AppBar position="static" className="session-header">
            <Toolbar>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="session-logo">
                    <Link to="/">
                      <img src={require('assets/img/site-logo.png')} alt="session-logo" className="img-fluid" width="110" height="35" />
                    </Link>
                  </div>
                  <div className="session-social-icon">
                    <IconButton className="text-white" aria-label="facebook">
                      <i className="zmdi zmdi-facebook"></i>
                    </IconButton>
                    <IconButton className="text-white" aria-label="twitter">
                      <i className="zmdi zmdi-twitter"></i>
                    </IconButton>
                    <IconButton className="text-white" aria-label="google">
                      <i className="zmdi zmdi-google"></i>
                    </IconButton>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="session-inner-wrapper p-4 h-100 p-md-0">
            <div className="row">
              <div className="col-sm-8 col-lg-5 mx-auto">
                <div className="session-body text-center">
                  <div className="session-head mb-30">
                    <h2>Get started with {AppConfig.brandName}</h2>
                    <p className="mb-0">Most powerful ReactJS admin panel</p>
                  </div>
                  <Form>
                    <FormGroup className="has-wrapper">
                      <Input type="password" name="user-pwd" id="pwd" className="has-input input-lg" placeholder="Enter Your Password" />
                      <span className="has-icon"><i className="ti-lock"></i></span>
                    </FormGroup>
                    <FormGroup>
                      <Button component={Link} to="/"  className="w-100 btn-info text-white btn-block btn-large">Unlock</Button>
                    </FormGroup>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}
