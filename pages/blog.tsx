import React from 'react'
import Head from 'next/head'
import Index from '../component/Blog/Index'

const blog = () => {
  return (
    <>
    <Head>
       <title>Gratis digital world</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/favicon.ico" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,200" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,200" />
     </Head>
     <Index/>
   </>
  )
}

export default blog