import Image from 'next/image'
import React,{useState} from 'react'
import Style from '../../styles/comingsoon.module.css'
import Cards from './Cards'
import Nav from '../../common/Nav';
import Footer from '../../common/Footer';


const Index: React.FC = () => {
  return (
    <header className={Style.header}>
      <Nav/>
      <div className={Style.jumbotron}>
          <h1>Something awesome is coming soon</h1>
          <p>Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns.</p>
           <div className={Style.cardContainer}>
              <Cards number={7} string="Days"/>
              <Cards number={24} string="Hours"/>
              <Cards number={54} string="Minutes"/>
              <Cards number={11} string="Seconds"/>
           </div>
           <form className={Style.form}>
          <div className={Style.inputNameContainer}>
              <input className={Style.input} placeholder="First Name" type="text" required />
              <input className={Style.input} placeholder="Last Name" type="text" required />
          </div>
           <div className={Style.EmailInputContainer}>
              <input type="email" placeholder='Enter your email address...'/>
              <button value="submit">Join our waiting list</button>
           </div>
           </form>
          <Footer/>
      </div>
      <div className={Style.cssball4} ></div>
      <div  className={Style.cssball1}></div>
      <div className={Style.cssball2}></div>
      <div className={Style.cssball3}></div>
    </header>
  )
}

export default Index