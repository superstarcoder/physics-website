import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/apPhysics.module.scss'

import Card from '../components/Card'
import MiniCard from '../components/MiniCard'

const apPhysics: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.background}></div> */}
        <h1><a>AP</a> PHYSICS <a>C</a></h1>
        <div className={styles.cards}>
            <Card fileName='/apPhysics/video-lessons.jpg' color='rgba(200, 255, 205, 1)' cardTitle='Video Lessons' linkTo='/ap-physics'/>
            <Card fileName='/apPhysics/hw-solutions.jpg' color='rgba(200, 255, 205, 1)' cardTitle='Homework Solutions' linkTo='physics-honors'/>
            <Card fileName='/apPhysics/others.jpg' color='rgba(200, 255, 205, 1)' cardTitle='Notes, Presentations, Supplemental Vidoes' linkTo='physics-honors'/>
	      </div>
        <div className={styles.miniCards}>
            <MiniCard color='rgba(255, 222, 199, 0.9)' cardTitle='AP Exam Preperation' linkTo='/ap-physics'/>
            <MiniCard color='rgba(255, 222, 199, 0.9)' cardTitle='Text Book Information' linkTo='/ap-physics'/>
            <MiniCard color='rgba(255, 222, 199, 0.9)' cardTitle='Green Sheet' linkTo='/ap-physics'/>
            <MiniCard color='rgba(208, 199, 255, 0.9)' cardTitle="Lynbrook's Academic Honesty Policy" linkTo='/ap-physics'/>
            <MiniCard color='rgba(208, 199, 255, 0.9)' cardTitle='Green Sheet' linkTo='/ap-physics'/>
            <MiniCard color='rgba(208, 199, 255, 0.9)' cardTitle='Labs' linkTo='/ap-physics'/>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default apPhysics
