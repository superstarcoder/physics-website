import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/videoLessons.module.scss'
import Navbar from '../Navbar'
import { useRouter } from 'next/router'
import VideoChapter from '../VideoLessonsPage/VideoChapter'

export default function VideoLessonsPage(props: {myData:any, pagePaths:any, navItemData:any}) {


	const { asPath } = useRouter()
	// console.log(asPath)
  let editModeOn = true

	return (
	<div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar editModeOn={editModeOn} navItemData={props.navItemData} />
      <main className={styles.main}>
        <h1 style={{fontSize: "4.5em"}}><a>AP</a> PHYSICS <a>C</a></h1>
        <h2>Video Lessons</h2>
        {(() => {
           let ls = []
           let i = 0
           // for (const [title, content] of Object.entries(props.content["chapters"])) {
          for (const chapter of props.myData.chapters) {
             ls.push(<VideoChapter myData={chapter} title={chapter.title} key={chapter.id} editModeOn={editModeOn}/>)
             i++
           }
           return ls
        })()}
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
