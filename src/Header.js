import React from 'react';   
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import logo from './tinderlogo.png';

function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon'/>
        </IconButton>
        <img src= {logo} className="header__logo" alt='hello'/>

        <IconButton>
            <ForumIcon fontSize='large' className='header__icon'/>
        </IconButton>

        
    </div>
  )
}

export default Header