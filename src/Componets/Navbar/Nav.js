import React from 'react'
import "./Nav.css"
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';


const Nav = () => {
    return (
        <>

            <nav>
                <div className="appname">
                    SOCIAL BOOK
                </div>
                <div className="searchbox">
                    <TextField placeholder='Search for friend, post or video' sx={{ input: { "background-color": "white", color: 'black', border: "1px solid  white", "border-radius": "10px", width: "323px", "padding": "10px" } }} className='searchTextField' />
                    <SearchIcon className='searchIcon' sx={{ input: { color: "black" } }} />
                </div>
                <div className="pages">
                    <span className="homepage">Homepage</span>
                    <span className="Timeline">Timeline</span>
                </div>
                <div className="icons">
                    <div className="person">
                        <span className="circleperson">
                            <PersonIcon sx={{ input: { cursor: "pointer" } }} />
                        </span>
                    </div>
                    <div className="Chat">
                        <span className="circlechat">
                            <ChatIcon sx={{ input: { cursor: "pointer" } }} />
                        </span>
                    </div>
                    <div className="noti">
                        <span className="circlenoti">
                            <NotificationsIcon sx={{ input: { cursor: "pointer" } }} />
                        </span>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Nav