import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header title={'フォロー中'} />
      <span>Home Page</span>
      <Footer homeiconcolor="#141D26" talkiconcolor="#808080" belliconcolor="#808080" iconcolor="#808080"/>
    </div>
  )
}

export default Home
