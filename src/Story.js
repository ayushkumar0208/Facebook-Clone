import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';

function Story({title,profileSrc,Image}) {
    return (
        <div style={{backgroundImage: `url(${Image})`}} className="story" >
            <Avatar className="avatar"  src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
