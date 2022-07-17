import React from 'react'
import Nav from '../Nav'
import Style from '../../styles/learningcenter.module.css'
import Footer from '../Footer'
import SearchIcon from '@mui/icons-material/Search';
import Features from './Features'
import AddFeature from './AddFeature';

const Index = () => {
  return (
    <div className={Style.container}>
        <Nav/>
        <section className={Style.section1}>
            <div className={Style.col1}></div>
            <div className={Style.col2}>
                    <div className={Style.form}>
                        <input type="text" placeholder="searching"/>
                        <SearchIcon/>
                    </div>
            </div>
                <div className={Style.AboutContainer}>
                    <div className={Style.AboutHeading}> 
                    <div className={Style.line}>
                      </div>Learning Center</div>
                    <div className={Style.HeaderH1}>Learning Center</div>
                </div>
            </section>
             <section className={Style.section2}>
              <div className={Style.featureleft}>
              <Features/>
              <div className={Style.addfeaturesection}>
                <AddFeature/>
                <AddFeature/>
                <AddFeature/>
                <AddFeature/>
              </div>

              </div>
              
              <div>
               
              </div>
            </section>
        <Footer/>  
    </div>
  )
}

export default Index