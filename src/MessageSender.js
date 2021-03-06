import React,{useState} from 'react'
import './MessageSender.css'
import { Avatar} from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from './firebase.js';
import firebase from "firebase";

function MessageSender() {
    const [{ user },dispatch] = useStateValue();
    const [input,setInput] = useState(""); 
    const [imageURL,setImageURL] = useState("");    

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({ 
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        })
        setInput('');
        setImageURL('');
    };
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} className="messageSender_input" placeholder={`What's on your mind, ${user.displayName} ?`}/>
                    <input value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Button
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_options">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_options">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender_options">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
