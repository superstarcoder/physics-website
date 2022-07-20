import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/videoLessons.module.scss'
import Navbar from '../Navbar'
import { useRouter } from 'next/router'
import VideoChapter from '../VideoChapter'

export default function VideoLessonsPage(props: {content:any}) {


	const { asPath } = useRouter()
	console.log(asPath)

	return (
	<div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 style={{fontSize: "4.5em"}}><a>AP</a> PHYSICS <a>C</a></h1>
        <h2>Video Lessons</h2>
        {(() => {
           let ls = []
           let i = 0
           for (const [title, content] of Object.entries(props.content["chapters"])) {
             ls.push(<VideoChapter content={content} title={title} key={title}/>)
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
