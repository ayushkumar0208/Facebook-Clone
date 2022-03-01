import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({src , Icon ,title}) {
    return (
        <div className="sidebarRow">
            {/* Means if these stuff are present then only show these otherwise not. */}
            {/*👇 */}
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
