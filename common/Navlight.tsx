import React,{useState} from 'react'
import Style from '../styles/navlight.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Logo from '../images/main-logo.svg'
import Link from 'next/link'
import Image from 'next/image';

const Navlight = () => {
      // control responsive nav
  const[isOpen,setIsOpen]= useState(false)
  return (
    <nav className={Style.nav}>
      <Link href="/">
        <div className={Style.logoContainer}>
        <Image  src={Logo} alt="logo" className={Style.logo}/>
        </div>
        </Link>
        <ul className={isOpen ? `${Style.navlink} ${Style.navlinkopen}`: Style.navlink}>
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
          <li >
            <Link href="/contact">
              <a className={Style.contact}>contact us</a>
            </Link>
          </li>
        </ul>
      {
        isOpen === true ? <CloseIcon  className={isOpen ? `${Style.close} ${Style.closeclose}` : ` ${Style.closeclose}`} onClick={()=>{
          setIsOpen((state)=> state = false)
        }} /> :  <MenuIcon onClick={()=>{
          setIsOpen((state)=> state = true)
       }}  className={Style.hamburger}/>
      }
       
      </nav>
  )
}

export default Navlight