/**
 * Recent Chat Users
 */
import React, { Component } from 'react';
import List from '@material-ui/core/List';
import { connect } from 'react-redux';

// components
import UserListItem from './UserListItem';

// actions
import { chatWithSelectedUser, getRecentChatUsers } from 'Actions';

class RecentChatUsers extends Component {

    componentWillMount() {
        this.fetchRecentChatUsers();
    }

    /**
     * Fetch Recent User
     */
    fetchRecentChatUsers() {
        this.props.getRecentChatUsers();
    }

    /**
     * Swicth Chat With User
     * @param {*object} user
     */
    switchChatWithUser(user) {
        this.props.chatWithSelectedUser(user);
    }

    render() {
        const { recentChatUsers, selectedUser } = this.props;
        if (recentChatUsers === null) {
            return (
                <div className="no-found-user-wrap">
                    <h4>No User Found</h4>
                </div>
            );
        }
        return (
            <List className="p-0 mb-0">
                {recentChatUsers.map((user, key) => (
                    <UserListItem
                        selectedUser={selectedUser}
                        user={user}
                        key={key}
                        onClickListItem={() => this.switchChatWithUser(user)}
                    />
                ))}
            </List>
        );
    }
}

const mapStateToProps = ({ chatAppReducer }) => {
    return chatAppReducer;
};

export default connect(mapStateToProps, {
    chatWithSelectedUser,
    getRecentChatUsers
})(RecentChatUsers);
