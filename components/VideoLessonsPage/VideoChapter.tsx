import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import VideoSubChapter from './VideoSubChapter'
import { IconContext } from "react-icons";
import {VideoChapterAddButton, VideoChapterDeleteButton, VideoChapterEditButton, VideoChapterMoveDownButton, VideoChapterMoveUpButton} from './VideoChapterButtons'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";

export default function VideoChapter(props: {myData:any, title:string, editModeOn:boolean}) {
  return (
    <>
      <div className={styles.chapter}>

        <div className={styles.chapterHeadingContainer}>

          {props.editModeOn && (
            <div className={styles.moveButtonsContainer}>
              <IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.1em"}}>
                <VideoChapterMoveUpButton Icon={AiOutlineArrowUp} />
                <VideoChapterMoveDownButton Icon={AiOutlineArrowDown} />
              </IconContext.Provider>
            </div>
          )}
          
          <h3 className={styles.chapterTitle}>{props.title}</h3>
          {props.editModeOn && (
            <IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.7em"}}>
              <VideoChapterEditButton Icon={AiOutlineEdit}/>
              <VideoChapterDeleteButton Icon={AiOutlineDelete} />
              <VideoChapterAddButton Icon={AiOutlinePlus} />
            </IconContext.Provider>
          )}
        </div>

        {(() => {
          let ls = []
          let i = 0
          // for (const [title, content] of Object.entries(props.content)) {
          for (const subChapter of props.myData.subChapters) {
            ls.push(<VideoSubChapter myData={subChapter} title={subChapter.title} color={`hsl(200, 100%, ${90 - i*2}%)`} key={subChapter.id} editModeOn={props.editModeOn}/>)
            i++
          }
          return ls
        })()}
      </div>
    </>
  )
}
