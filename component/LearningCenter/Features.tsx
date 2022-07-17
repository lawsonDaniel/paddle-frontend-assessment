import React from 'react'
import Style from '../../styles/learningcenter.module.css'


const Features = () => {
  return (
    <div className={Style.feature}>
        <span className={`material-symbols-outlined ${Style.icon}`}>
        description
        </span>
        <div className={Style.featurInfo}>
            <h1>In-App Messaging Features</h1>
            <span className={Style.p}>New around here ? Start with the Basics</span>
            <p>We are developing an in-app messaging feature that enables advertisers
             and affiliates to communicate 
            in real-time through their dashboards. </p>
            <div className={Style.benefit}>Benefits include:</div>
           
            <ol className={Style.list}>
                <li> Advertisers - affiliate direct chats</li>
                <li>Advertisers can block/disable users from sending messages.</li>
                <li> Create marketing groups</li>
                <li>In-app messaging notifications</li>
                <li>Advertisers can send bulk messages</li>
            </ol>
            <div className={Style.underline}></div>
        </div>
        <span className={`material-symbols-outlined ${Style.remove}`}>
        remove
        </span>
    </div>
  )
}

export default Features