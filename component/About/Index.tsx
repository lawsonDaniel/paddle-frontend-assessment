import React from 'react'
import Nav from '../Nav'
import Style from '../../styles/about.module.css'

const Index = () => {
  return (
    <div className={Style.container}>
        <Nav/>
        <div>
            <section className={Style.section1}>
            <div className={Style.col1}></div>
            <div className={Style.col2}>
            Our tools are easy to set up and use with a user friendly
             dashboard that enables you to set up,
             launch, automate and manage multi-affiliate campaigns in 5 minutes.
            </div>
                <div className={Style.AboutContainer}>
                    <div className={Style.AboutHeading}> 
                    <div className={Style.line}>
                      </div>About us</div>
                    <div className={Style.HeaderH1}>Built for SaaS and E-commerce</div>
                </div>
            </section>
          <section className={Style.section2}>
              <div className={Style.section2heading}> 
              Metricks was developed because just like you, we needed a product 
              that could give us good value.</div>
          </section>
        </div>
    </div>
  )
}

export default Index