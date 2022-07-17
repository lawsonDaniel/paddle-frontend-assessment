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
            <section className={Style.session2}>
                    <div className={Style.left}>
                        <h1>Latest From The Blog</h1>
                        <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                            eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                            takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
                            </div>
                    </div>
                    <div className={Style.right}>
                        <div className={Style.form}>
                            <input type="text" placeholder="Search here" />
                            <span className="material-symbols-outlined">
                            search
                            </span>

                        </div>
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