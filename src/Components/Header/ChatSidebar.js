import React from 'react';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const ChatSidebar = () => (
   <div className="chat-sidebar rct-customizer">
      <AppBar position="static" color="primary">
         <Toolbar>
            <Typography  color="inherit">
               Chat
            </Typography>
         </Toolbar>
      </AppBar>
      <List>
         
      </List>
   </div>
);

export default ChatSidebar;
