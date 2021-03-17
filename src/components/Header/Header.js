import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountInfo from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

function Header() {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const logoutOffApp = () => {
        dispatch(logout());
        auth.signOut();
     };

    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountInfo} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon } title="Jobs" />
                <HeaderOption Icon={ ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar={user?.photoUrl} title={user?.displayName} onClick={logoutOffApp}></HeaderOption>

            </div>
        </div>
    )
}

export default Header
