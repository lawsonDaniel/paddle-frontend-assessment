import React from 'react'
import Style from '../styles/footerlight.module.css'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footerlight = () => {
  return (
  
      <div className={Style.footer}>
        <div className={Style.socialMedia}>
        <YouTubeIcon  className={Style.icon}/>
        <FacebookIcon className={Style.icon}/>
        <LinkedInIcon className={Style.icon}/>
        <InstagramIcon className={Style.icon}/>
        <TwitterIcon className={Style.icon}/>
    </div>
    <div className={Style.privacy}>
        <h5>Terms of services</h5>
        <h5>Privacy policy</h5>
    </div>
    <div className={Style.copy}>Copyright 2021 @ Peddle Technologies. All Rights Reserved.</div>
      </div>
   
  )
}

export default Footerlight