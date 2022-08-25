import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from '../components/CardsPage/Card'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.background}></div> */}
        <h1>LHS Physics</h1>
        <h2>Mr. Taylor</h2>
	      <div className={styles.cards}>
            <Card fileName='/ap-physics.jpg' color='rgba(200, 255, 205, 0.9)' cardTitle='AP Physics C' linkTo='/apPhysics' myData={{}}/>
            <Card fileName='/physics-honors.jpg' color='rgba(255, 209, 199, 0.9)' cardTitle='Physics Honors' linkTo='physics-honors' myData={{}}/>
	      </div>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
