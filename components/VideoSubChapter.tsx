import React from 'react'
import styles from '../styles/videoLessons.module.scss'
import VideoItem from './VideoItem'

export default function VideoSubChapter(props: {content:any, title:string, color:string}) {
	return (
    <>
      <div className={styles.subChapter} style={{backgroundColor: props.color}} >
        <p className={styles.subChapterTitle}>{props.title}</p>
        {(() => {
          let ls = []
          let i = 0
          for (const [title, content] of Object.entries(props.content)) {
            ls.push(<VideoItem content={content} title={title} color={`hsl(248, 100%, ${89 - i*1}%)`} key={title}/>)
            i++
          }
          return ls
        })()}
      </div>
    </>
  )
}