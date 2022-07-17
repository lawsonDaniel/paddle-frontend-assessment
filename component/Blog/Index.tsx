import React from 'react'
import Nav from '../Nav'
import Style from '../../styles/blog.module.css'
import Navlight from '../Navlight'
import Footerlight from '../Footerlight'

const Index = () => {
  return (
    <div>
       <Navlight/>
        <div className={Style.container}>
        <section className={Style.section1}>
            <div className={Style.col1}></div>
            <div className={Style.col2}>
            </div>
                <div className={Style.AboutContainer}>
                    <div className={Style.AboutHeading}> 
                    <div className={Style.line}>
                      </div>BLOG</div>
                    <div className={Style.HeaderH1}>Articles and News</div>
                </div>
            </section>
        <div className={Style.footercontainer}>
            <Footerlight/>
        </div>
       
        </div>
    </div>

  )
}

export default Index