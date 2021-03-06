import React from 'react';
import { Avatar } from '@material-ui/core';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">

            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1519575706483-221027bfbb31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl} alt={user.displayName}/>
                <h2>{user.displayName}</h2>
                <h4>email</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">3,478</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,592</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('ReactJs')}
                {recentItem('programing')}
                {recentItem('developer')}
                {recentItem('design')}
                {recentItem('front-end dev')}

            </div>
            
        </div>
    )
}

export default Sidebar
