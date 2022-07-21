import type { NextPage } from 'next'
import Head from 'next/head'
import HomeLayout from '~/components/HomeLayout'

const Home: NextPage = () => {
  return (
    <HomeLayout>
        <Head>
          <title>Sensor App</title>
          <meta name="description" content="An app that configures sensors" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='container'>
          <a href="http://app.localhost:3000">Go to App</a>
        </div>
    </HomeLayout>
  )
}

export default Home
