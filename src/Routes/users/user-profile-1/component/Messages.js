/**
 * Messages Page
 */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import classnames from 'classnames';
import Avatar from '@material-ui/core/Avatar';
import { NotificationManager } from 'react-notifications';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  InputGroup,
  InputGroupAddon,
  FormGroup,
  Label
} from 'reactstrap';

// api
import api from 'api';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct section loader
import RctSectionLoader from 'Components/RctSectionLoader/RctSectionLoader';

export default class Messages extends Component {

  state = {
    all: false,
    reloading: false,
    messages: null,
    allMessages: null,
    newMessageModal: false,
    addNewMessageDetail: {
      id: null,
      userName: '',
      userAvatar: '',
      message: '',
      starred: false,
      select: false
    },
    viewMessageDialog: false,
    selectedMessage: null
  };

  componentDidMount() {
    this.getUserMessages();
  }

  // get user messages
  getUserMessages() {
    api.get('userMessages.js')
      .then((response) => {
        this.setState({ messages: response.data, allMessages: response.data });
      })
      .catch(error => {
        // error handling
      })
  }

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  /**
   * On Reload Messages
   */
  onReloadMessages() {
    this.setState({ reloading: true });
    let self = this;
    setTimeout(() => {
      self.setState({ reloading: false });
    }, 1500);
  }

  /**
   * Get Search Results
   */
  getSearchResults(e) {
    const { allMessages } = this.state;
    const searchMessages = allMessages.filter((message) =>
      message.message.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1);
    this.setState({ messages: searchMessages });
  }

  /**
   * Mark Message As Star
   */
  markMessageAsStar(index) {
    let messages = this.state.allMessages;
    messages[index].starred = !messages[index].starred;
    this.setState({ messages, allMessages: messages });
  }

  /**
   * On Select Message
   */
  onSelectMessage(index) {
    let messages = this.state.allMessages;
    messages[index].select = !messages[index].select;
    this.setState({ messages, allMessages: messages });
  }

  /**
   * Open Write New Message Modal
   */
  openWriteNewMessageModal() {
    this.setState({ newMessageModal: true });
  }

  /**
   * Toggle Write New Message Modal
   */
  toggleWriteNewMessageModal() {
    this.setState({
      newMessageModal: !this.state.newMessageModal
    });
  }

  /**
   * Add New Message
   */
  addNewMessage() {
    let messages = this.state.allMessages;
    const { userName, message } = this.state.addNewMessageDetail;
    if (userName !== '' && message !== '') {
      let data = {
        ...this.state.addNewMessageDetail,
        id: new Date().getTime()
      }
      messages.push(data);
      this.setState({ reloading: true, newMessageModal: false });
      let self = this;
      setTimeout(() => {
        self.setState({ messages, allMessages: messages, reloading: false });
      }, 1500);
    }
  }

  /**
   * On Reply Message
   */
  onReplyMessage(index) {
    let messages = this.state.allMessages;
    messages[index].replyBox = !messages[index].replyBox;
    this.setState({ messages, allMessages: messages });
  }

  /**
   * Send Reply
   */
  sendReply(index) {
    let messages = this.state.allMessages;
    messages[index].replyBox = false;
    this.setState({ messages, allMessages: messages, reloading: true });
    let self = this;
    setTimeout(() => {
      self.setState({ reloading: false });
      NotificationManager.success('Reply Sent Successfully!');
    }, 1500);
  }

  /**
   * Hanlde Close View Message
   */
  handleCloseViewMessage() {
    this.setState({ viewMessageDialog: false });
  }

  /**
   * View Message Hanlder
   */
  viewMessage(message) {
    this.setState({ viewMessageDialog: true, selectedMessage: message });
  }

  render() {
    const { messages, reloading, selectedMessage } = this.state;
    return (
      <div className="messages-wrapper">
        <div className="row mb-30">
          <div className="col-sm-5 col-md-4 col-lg-3">
            <Button onClick={() => this.openWriteNewMessageModal()}  color="primary" className="text-white btn-lg btn-block mb-10"><IntlMessages id="button.writeNewMessage" /></Button>
          </div>
          <div className="col-sm-7 col-md-8 col-lg-9">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <IconButton aria-label="facebook">
                  <i className="zmdi zmdi-search"></i>
                </IconButton>
              </InputGroupAddon>
              <Input placeholder="Search messages" type="text" onChange={(e) => this.getSearchResults(e)} />
            </InputGroup>
          </div>
        </div>
        <ul className="msg-list list-unstyled">
          <li className="d-flex justify-content-between align-items-center">
            <div className="toolbar">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.jason}
                    color="primary"
                    onChange={this.handleChange('all')}
                    value="all"
                  />
                }
              />
              <IconButton onClick={() => this.onReloadMessages()} className="btn-outline-default">
                <i className="ti-reload"></i>
              </IconButton>
            </div>
            <span className="fs-14">1-50 of 234</span>
          </li>
          {messages && messages.map((data, key) => (
            <li className="clearfix d-flex" key={key}>
              <Checkbox
                checked={data.select}
                className="pull-left"
                color="primary"
                onClick={() => this.onSelectMessage(key)}
              />
              <IconButton className={classnames("pull-left mr-15", { 'text-warning': data.starred })} onClick={() => this.markMessageAsStar(key)}>
                <i className="ti-star"></i>
              </IconButton>
              <div className="media pull-left">
                {data.userAvatar !== '' ?
                  <img src={data.userAvatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
                  : <Avatar className="mr-15">{data.userName.charAt(0)}</Avatar>
                }
                <div className="media-body">
                  <h5>{data.userName}</h5>
                  <p className="text-muted">{data.message}</p>
                  <div className="mb-10">
                    <Button className="btn-default mr-10 btn-xs" onClick={() => this.onReplyMessage(key)}>
                      <i className="ti-back-right mr-10"></i> Reply
                    </Button>
                    <Button className="btn-default btn-xs" onClick={() => this.viewMessage(data)}>
                      <i className="ti-eye mr-10"></i> Read
                    </Button>
                  </div>
                  {data.replyBox &&
                    <InputGroup className="w-75">
                      <Input className="mr-20" />
                      <Button color="primary" className="text-white"  onClick={() => this.sendReply(key)}>Send</Button>
                    </InputGroup>
                  }
                </div>
              </div>
            </li>
          ))}
        </ul>
        {reloading &&
          <RctSectionLoader />
        }
        <Modal isOpen={this.state.newMessageModal} toggle={() => this.toggleWriteNewMessageModal()} className={this.props.className}>
          <ModalHeader toggle={() => this.toggleWriteNewMessageModal()}>Write New Message</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="email"
                id="name"
                placeholder="Enter Name"
                value={this.state.addNewMessageDetail.userName}
                onChange={(e) => this.setState({
                  addNewMessageDetail: {
                    ...this.state.addNewMessageDetail,
                    userName: e.target.value
                  }
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input
                type="textarea"
                name="text"
                id="message"
                value={this.state.addNewMessageDetail.message}
                onChange={(e) => this.setState({
                  addNewMessageDetail: {
                    ...this.state.addNewMessageDetail,
                    message: e.target.value
                  }
                })}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button  color="primary" className="text-white" onClick={() => this.addNewMessage()}>Save</Button>{' '}
            <Button  className="btn-danger text-white" onClick={() => this.toggleWriteNewMessageModal()}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Dialog open={this.state.viewMessageDialog} onClose={() => this.handleCloseViewMessage()}>
          <DialogContent>
            {selectedMessage !== null &&
              <div className="clearfix d-flex">
                <div className="media pull-left">
                  {selectedMessage.userAvatar !== '' ?
                    <img src={selectedMessage.userAvatar} alt="user prof" className="rounded-circle mr-15" width="50" height="50" />
                    : <Avatar className="mr-15">{selectedMessage.userName.charAt(0)}</Avatar>
                  }
                  <div className="media-body">
                    <h5>{selectedMessage.userName}</h5>
                    <p className="text-muted">{selectedMessage.message}</p>
                  </div>
                </div>
              </div>
            }
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
