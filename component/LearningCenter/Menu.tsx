import React from 'react'
import FeatureMenu from './FeatureMenu'
import Style from '../../styles/learningcenter.module.css'



const Menu = () => {
  return (
    <div className={Style.featuremenucontainer}>
        <FeatureMenu menuItem="General"/>
        <FeatureMenu menuItem="Features"/>
        <FeatureMenu menuItem="Building an affiliate campaign"/>
        <FeatureMenu menuItem="One-time Access Affiliate Sign-up"/>
        <FeatureMenu menuItem="Managing and optimizing affiliate campaign"/>
        <FeatureMenu menuItem="Managing Marketing Assets"/>
        <FeatureMenu menuItem="In-App Messaging Features"/>
        <FeatureMenu menuItem="New user onboarding"/>
        <FeatureMenu menuItem="Affiliate Payouts and commission"/>
        <FeatureMenu menuItem="Troubleshooting"/>
        <FeatureMenu menuItem="Account & Billing"/>
        <FeatureMenu menuItem="Advanced technical features"/>
        <FeatureMenu menuItem="New features"/>
        <FeatureMenu menuItem="Announcements"/>

    </div>
  )
}

export default Menu