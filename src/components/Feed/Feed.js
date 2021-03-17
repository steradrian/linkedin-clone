import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption/InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscritionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Posts/Post';
import { db } from '../../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        db.collection("posts").orderBy('timeStamp', 'desc').onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        })
    },[])

    const sendPost = (e) => {
        e.preventDefault();

        if (input != "") {
           db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || user.displayName,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        }) 
        }
        
        setInput("");
    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form>
                        <input type="text" defaultValue={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" onClick={sendPost}>Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                    <InputOption title="Video" Icon={SubscritionsIcon} color="#E7A33E" />
                    <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
                    <InputOption title="Photo" Icon={CalendarViewDayIcon} color="#7FC15E"/>
                </div>
            </div>

            <FlipMove>
            {posts.map(({ id, data: { name, description, message, photoUrl }}) => (
                <Post
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed
