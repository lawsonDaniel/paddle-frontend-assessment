import React from 'react'
import Nav from '../../common/Nav'
import Style from '../../styles/blog.module.css'
import Navlight from '../../common/Navlight'
import Footerlight from '../../common/Footerlight'
import Cards from './Cards'
import SCards from './SCards'
import Link from 'next/link'

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
            <section className={Style.section3}>
                <Cards/>
            </section>
            
            <section className={Style.section4}>
                <div className={Style.recent}>
                    <h1>Recent Articles</h1>
                    <span>Lorem ipsum dolor sitemp sed diam nonumy ipsum dolor sitemp sed diam nonumy </span>
                </div>
                
            </section>
            <section className={Style.section5}>
                <SCards/>
                <div className={Style.loadmore}>Load More</div>
            </section>
            <section className={Style.section6}>
            <div className={Style.contactContainer}>
              <h1 className={Style.contactHeading}>what to know more about Metrics ?</h1>
              <p>Learn who we are and what drives us.</p>
            </div>
            <Link href="/contact">
            <div className={Style.contactLink}>
                <div>Contact</div>
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
            </div>
            </Link>
          </section>
        <div className={Style.footercontainer}>
            <Footerlight/>
        </div>
       
        </div>
    </div>

  )
}

export default Index