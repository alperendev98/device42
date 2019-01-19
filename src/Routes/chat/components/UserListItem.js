/**
 * User List Item
 */
import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import classnames from 'classnames';

// helpers
import { textTruncate } from 'Helpers/helpers';

const UserListItem = ({ user, selectedUser, onClickListItem }) => (
    <ListItem
        onClick={onClickListItem}
        className={classnames('user-list-item',
            { 'item-active': selectedUser && selectedUser.id === user.id }
        )}
    >
        <div className="d-flex justify-content-between w-100 align-items-center">
            <div className="media align-items-center w-90">
                <div className="media-left position-relative mr-10">
                    <img src={user.photo_url} className="img-fluid rounded-circle" alt="user profile" width="40" height="40" />
                    {user.isActive && (<span className="badge badge-success badge-xs p-5 rct-notify">&nbsp;</span>)}
                </div>
                <div className="media-body pt-5">
                    <h5 className="mb-0">{user.first_name}&nbsp;{user.last_name}</h5>
                    <span className="font-xs d-block">{textTruncate(user.last_chat, 50)}</span>
                </div>
            </div>
            <div className="text-right msg-count">
                {user.new_message_count !== 0 ?
                    <span className="badge badge-danger rounded-circle">{user.new_message_count}</span>
                    : null
                }
            </div>
        </div>
    </ListItem>
);

export default UserListItem;
