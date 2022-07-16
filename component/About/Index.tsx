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
          <section className={Style.section3}>
            <div className={Style.section3left}>
                    <div className={Style.numberCounterContainer}>
                    <div className={Style.numberCounter}>
                        <div className={Style.underline}></div>
                        <div style={{fontSize: "14px"}}>01</div>
                    </div>
                    <div>WHY US ?</div>
                    </div>
                <div className={Style.sectionp}>
                    We pride ourselves in our ability to innovate and create world-class tools 
                    that provide reliable and efficient touchpoints between advertisers and affiliates.
                </div>
                <div className={`pattern-dots-xl ${Style.pattern}`}></div>
            </div>
            <div className={Style.section3right}>
            <div className={Style.numberCounterContainer}>
                    <div className={Style.numberCounter}>
                        <div className={Style.underline}></div>
                        <div style={{fontSize: "14px"}}>02</div>
                    </div>
                    <div>GROWING WITH YOU</div>
                    </div>
                    <div>
                        <p>
                        Leveraging the best technology, we have developed an all-in-one affiliate
                         marketing tracking software, a genius tool to help you track, automate and
                          optimize your influencer campaigns, all from one dashboard.
                        </p>
                        <p>
                        Our team of experts are constantly brainstorming, testing and developing
                         new solutions with only one thing in mind - your business growth. Your success is our success 
                        and by giving you the tools you need to scale, we grow as well.
                        </p>
                    </div>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Index