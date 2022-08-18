import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import VideoItem from './VideoItem'
import { IconContext } from "react-icons";
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import { VideoSubChapterAddButton, VideoSubChapterEditButton, VideoSubChapterDeleteButton, VideoSubChapterMoveUpButton, VideoSubChapterMoveDownButton } from './VideoSubChapterButtons';

export default function VideoSubChapter(props: {content:any, title:string, color:string, editModeOn:boolean}) {
	return (
    <>
    
      <div className={styles.subChapter} style={{backgroundColor: props.color}} >
        <div className={styles.subChapterTitleContainer}>

        {props.editModeOn && (
          <div className={styles.moveButtonsContainer}>
            <IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.1em"}}>
              <VideoSubChapterMoveUpButton Icon={AiOutlineArrowUp} />
              <VideoSubChapterMoveDownButton Icon={AiOutlineArrowDown} />
            </IconContext.Provider>
          </div>
        )}

          <p className={styles.subChapterTitle}>{props.title}</p>
          {props.editModeOn && (
            <IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.7em"}}>
              <VideoSubChapterEditButton Icon={AiOutlineEdit}/>
              <VideoSubChapterDeleteButton Icon={AiOutlineDelete} />
              <VideoSubChapterAddButton Icon={AiOutlinePlus} />
            </IconContext.Provider>
          )}
        </div>
      
        {(() => {
          let ls = []
          let i = 0
          for (const [title, content] of Object.entries(props.content)) {
            ls.push(<VideoItem content={content} title={title} color={`hsl(248, 100%, ${89 - i*1}%)`} key={title} editModeOn={props.editModeOn}/>)
            i++
          }
          return ls
        })()}
      </div>
    </>
  )
}