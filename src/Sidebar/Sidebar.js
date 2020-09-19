import React from 'react';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import {SearchIcon} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';

import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <IconButton><AccountCircleIcon /></IconButton>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>

            </div>
            <div className="sidebar__chats">
                {/* <SidebarChat /> */}
            </div>
        </div>
    )
}

export default Sidebar
