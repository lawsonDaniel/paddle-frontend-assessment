import React from 'react'
import Style from '../../styles/learningcenter.module.css'


const AddFeature = () => {
  return (
    <div className={Style.Addtaskcontainer}>
       <div className={Style.Addtaskinner}>
            <div>
            Lorem ipsum dolor sit amet, consetetur
            </div>
            <span className={`material-symbols-outlined ${Style.add}`}>
            remove
            </span>
       </div>
       <div className={Style.underline}></div>
    </div>
  )
}

export default AddFeature