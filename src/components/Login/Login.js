import React, { useState } from 'react';
import { auth } from '../../firebase';
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const dispatch = useDispatch();
    
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoUrl: userAuth.user.photoURL,
                }));
            }).catch(error => alert(error));
         console.log('logged in')
    };

    const register = () => {
        if (!name) {
            return alert("Please enter your full name!");
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoUrl,
            })
                .then(() => {
                    dispatch(login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: photoUrl,
                    }));
                });
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

            <form>
                <input type="text" placeholder="Full name (required if registering)" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" placeholder="Profile picture URL (optional)" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)}/>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value) }/>
                
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login
