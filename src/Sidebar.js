import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow.js'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider';


function Sidebar() {
    const [{ user},dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow title={user.displayName} src={user.photoURL}/>
            <SidebarRow title="COVID-19 Imformation Center" Icon={LocalHospitalIcon}/>
            <SidebarRow title="Pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title="Friends" Icon={PeopleIcon}/>
            <SidebarRow title="Messeger" Icon={ChatIcon}/>
            <SidebarRow title="Marketplace" Icon={StorefrontIcon}/>
            <SidebarRow title="Videos" Icon={VideoLibraryIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            <SidebarRow title="Marketplace" Icon={ExpandMoreIcon}/>
            
        </div>
    )
}

export default Sidebar
