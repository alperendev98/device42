/**
 * Message Block Component
 */
import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Message = ({ even, adminPhotoUrl, data, selectedUserPhotoUrl }) => {
	if (even) {
		return (
			<div className="d-flex flex-nowrap mb-3">
				<Avatar alt="user profile" src={selectedUserPhotoUrl} className="img-fluid rounded-circle mr-15 align-self-start" />
				<div className="chat-bubble-wrap">
					<div className="chat-bubble even bg-aqua">
						<p className="mb-0">{data.message}</p>
					</div>
					<span className="text-left d-block font-xs text-muted mt-1">{data.sent}</span>
				</div>
			</div>
		);
	}
	return (
		<div className="d-flex flex-nowrap flex-row-reverse mb-3">
			<Avatar alt="user profile" src={adminPhotoUrl} className="img-fluid rounded-circle ml-15 align-self-start" />
			<div className="chat-bubble-wrap">
				<div className="chat-bubble odd bg-primary text-white">
					<p className="mb-0">{data.message}</p>
				</div>
				<span className="text-right d-block font-xs text-muted mt-1">{data.sent}</span>
			</div>
		</div>
	)
};

export default Message;
