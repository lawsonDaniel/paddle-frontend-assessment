import React from 'react'
import Style from '../../styles/learningcenter.module.css'

interface Menu{
  menuItem: String
}

const FeatureMenu = ({menuItem}:Menu) => {
  return (
    <div className={Style.featureMenu}>{menuItem}</div>
  )
}

export default FeatureMenu