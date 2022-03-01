import React from 'react'
import'./Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Header() {
    const [{ user},dispatch] = useStateValue();
    return (
        <div className="header">
            {/* BEM naming convention using underscore*/}
            <div className="header_left">
                
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"></img>
                <div className="header_input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>
            <div className="header_middle">
                <div className="header-options header-active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header-options">
                    <FlagIcon fontSize="large"/>
                </div>
                <div className="header-options">
                    <SubscriptionsIcon fontSize="large"/>
                </div>
                <div className="header-options">
                    <StorefrontIcon fontSize="large"/>
                </div>
                <div className="header-options">
                    <SupervisedUserCircleIcon fontSize="large"/>
                </div>
            </div>
            <div className="header_right">
                <div className="header_info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>  
        </div>
    )
}

export default Header
