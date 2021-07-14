import { Avatar } from '@material-ui/core';
import React from 'react'
import './SideBar.css';

function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://cdn.pixabay.com/photo/2021/07/09/17/10/eye-6399571_960_720.jpg" alt="" />
                <Avatar className='sidebar__avatar'/>
                <h2>sanjeev</h2>
                <h4>sanjeev.kukanur@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>who viewed you</p>
                <p className="sidebar__statNumber">2,542</p>    
            </div>
            <div className="sidebar__stat">
                <p>views on post</p>
                <p className="sidebar__statNumber">2,542</p>     
            </div>
            <div className="sidebar__button">
                <p>Recent</p>
            </div>
            </div>
        </div>
    )
}

export default SideBar
