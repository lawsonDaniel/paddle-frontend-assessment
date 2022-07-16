import React from 'react'
import Style from '../styles/comingsoon.module.css'
import Icon from '../styles/icon.module.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
        <div className={Style.socialMedia}>
        <YouTubeIcon  className={Icon.icon}/>
        <FacebookIcon className={Icon.icon}/>
        <LinkedInIcon className={Icon.icon}/>
        <InstagramIcon className={Icon.icon}/>
        <TwitterIcon className={Icon.icon}/>
    </div>
    <div className={Style.privacy}>
        <h5>Terms of services</h5>
        <h5>Privacy policy</h5>
    </div>
    <div className={Style.copy}>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</div>
   </>
  )
}

export default Footer