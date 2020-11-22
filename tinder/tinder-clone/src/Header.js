import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img className="header_logo"
                src="https://images.unsplash.com/photo-1555050551-82f8d95a0614?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                alt="" />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon" />
            </IconButton>
        </div>
    )
}


export default Header
