import React from 'react'
import Style from '../../styles/contact.module.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Router from 'next/router'
const Index = () => {
  return (
    <div className={Style.container}>
        <div className={Style.leftContainer}>Image</div>
        <div className={Style.rightContainer}>
          <div className={Style.header}>
            Hey, we are still in the works, but you can send us a message!
          </div>
          <form className={Style.form}>
            <div className={Style.inputcontainer}>
                <label className={Style.label} htmlFor='firstName'>First Name</label>
                <input className={Style.input} id="firstName" type="text" placeholder="Enter your First Name" />
            </div>
            <div className={Style.inputcontainer}>
                <label className={Style.label} htmlFor='lasttName'>Last Name</label>
                <input className={Style.input} id="lastName" type="text" placeholder="Enter your Last Name" />
            </div>
            <div className={Style.inputcontainer}>
                <label className={Style.label} htmlFor='emailAddress'>Email Address</label>
                <input className={Style.input} id="emailAddress" type="email" placeholder="Enter your Email Address" />
            </div>
            <div className={Style.inputcontainer}>
                <label className={Style.label} htmlFor='help'>Tell us what you need help with:</label>
                <input className={Style.textarea} id="help" type="text" placeholder="Enter A Topic Like 'Channel Problem'" />
            </div>
            <button value="submit" className={Style.submitBtn}>Send Now</button>
          </form>
        </div>
        <span className={`material-symbols-outlined ${Style.backbtn}`} onClick={()=>{
            Router.push('/')
        }}>
            arrow_circle_right
          </span>

        {/* <ArrowCircleRightIcon className={Style.backbtn}/> */}
    </div>
  )
}

export default Index