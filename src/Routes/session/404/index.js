import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import QueueAnim from 'rc-queue-anim';

export default class NotFound extends Component {
  render() {
    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="error-wrapper" key="1">
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
          <div className="session-inner-wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-9 mx-auto">
                <div className="error-body text-center">
                  <h2 className="oops">Oops.. </h2>
                  <h2 className="bold mb-0">404</h2>
                  <h2 className="error-msg mb-30">Sorry, page not found</h2>
                  <h4 className="mb-50"> Looks like you have navigated too far from Federation Space. Our Application <br />
                    cannot help you here.</h4>
                  <Button component={Link} to="/"  className="btn-light btn-lg">Go To Home Page</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}
