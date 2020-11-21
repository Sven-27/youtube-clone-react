import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon />
            <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" alt="" />
       </div>
       <div className="header__input">
       <input type="text" />
        <SearchIcon className="header__inputButton" />
        </div>
        <div className="header__icons">
        <VideoCallIcon />
        <AppsIcon />
        <NotificationsIcon />
        <Avatar alt="sven" src="https://avatars0.githubusercontent.com/u/60977987?s=400&u=2f1e1acb8dc2d0c86d987c0e9f498a76a6f0debf&v=4" />
        </div>
       </div>
    )
}

export default Header
