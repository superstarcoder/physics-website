import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import VideoSubChapter from './VideoSubChapter'

export default function VideoChapter(props: {content:any, title:string, editModeOn:boolean}) {
  return (
    <>
      <div className={styles.chapter}>
        <h3 className={styles.chapterTitle}>{props.title}</h3>
        {(() => {
          let ls = []
          let i = 0
          for (const [title, content] of Object.entries(props.content)) {
            ls.push(<VideoSubChapter content={content} title={title} color={`hsl(200, 100%, ${90 - i*2}%)`} key={title} editModeOn={props.editModeOn}/>)
            i++
          }
          return ls
        })()}
      </div>
    </>
  )
}
