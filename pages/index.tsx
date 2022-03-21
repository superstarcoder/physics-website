import type { NextPage } from 'next'
import spaceBg from '../public/space-bg.jpg'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{
          backgroundImage: `url('/space-bg.jpg')`,
          backgroundPosition: '50% 100%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh',
          minWidth: '100vw'
        }}></div>
        {/* <h1>LHS Physics</h1>
        <h2>Mr. Taylor</h2>

        <div className='card'>
          <div>
            <h1>AP Physics C</h1>
          </div>
        </div> */}

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
