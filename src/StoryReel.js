import React from 'react'
import './StoryReel.css'
import Story from './Story.js'
import { useStateValue } from './StateProvider';

function StoryReel() {
    const [{ user},dispatch] = useStateValue();
    return (
        <div className="storyReel">
            
            <Story title={user.displayName} profileSrc={user.photoURL} Image="https://www.biography.com/.image/t_share/MTY2MzU3ODI4NjExNjE0Mzgy/elonmusk_facts_desktop.jpg"/>
            <Story title="Jeff Bezos" profileSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSVvdf3mtAr8BQaBqwu2wAFbJD1dH6jtmyAK7hZRRnbFc0yc_pT" Image="https://techcrunch.com/wp-content/uploads/2016/08/instagram-stories1.jpg"/>
            <Story title="Sundar Pichai" profileSrc="https://api.time.com/wp-content/uploads/2020/09/time-100-Sundar-Pichai.jpg" Image="https://later.com/blog/wp-content/uploads/2019/06/3x3-IG-STORIES-51.png"/>
            <Story title="Buggati" profileSrc="https://i.pinimg.com/originals/35/65/d6/3565d6a5db541ea919cdeab4fda26c98.jpg" Image="https://www.volkswagenag.com/presence/markenundmodelle/bugatti/Bugatti_Dynamic.jpg.x_632.y_1000.trans"/>
            <Story title="Akshay Kumar" profileSrc="https://static.toiimg.com/photo/msid-73152934/73152934.jpg?78654" Image="https://i2.cinestaan.com/image-bank/1500-1500/139001-140000/139074.jpg"/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            <Story/>
            {/* Story Component */}
        </div>
    )
}

export default StoryReel
