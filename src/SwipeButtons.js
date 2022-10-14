import React from 'react'
import './SwipeButtons.css'

import ReplayIcon from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/icons/Replay';
import CloseIcon from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/icons/Close';
import StarRateIcon from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/icons/StarRate';
import FavoriteIcon from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/icons/Favorite';
import FlashOnIcon from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/icons/FlashOn';
import IconButton from'C:/Users/Jojo/AppData/Roaming/npm/node_modules/@material-ui/core/IconButton';

function SwipeButtons() {
  return (
    <div className='swipeButtons'>
        

        <IconButton className='swipeButtons__repeat'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__star'> 
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__right'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='swipeButtons__lightning'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
}

export default SwipeButtons