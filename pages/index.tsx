import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Index from '../component/ComingSoon/Index'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gratis digital world</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Index/>
      </main>
    </div>
  )
}

export default Home
