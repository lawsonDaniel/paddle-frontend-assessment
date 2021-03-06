import React from 'react'
import Index from '../component/Contact/Index'
import Head from 'next/head'

const contact = () => {
  return (
    <>
      <Head>
        <title>Gratis digital world</title>
        <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/logo.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,200,0,200" />
      </Head>
      <main>
      <Index/>
      </main>
    </>
   
  )
}

export default contact