import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import { IconContext } from "react-icons";
// import VideoItemEditButton from './VideoItemEditButton';
// import VideoItemDeleteButton from './VideoItemDeleteButton';
// import VideoItemAddButton from './VideoItemAddButton';
import { VideoItemAddButton, VideoItemEditButton, VideoItemDeleteButton, VideoItemMoveUpButton, VideoItemMoveDownButton } from './VideoItemButtons';


export default function VideoItem(props: { content:any, title: string, color:string, editModeOn: boolean}) {
	if (!props.editModeOn) {
		return (
			<div className={styles.video} style={{backgroundColor: props.color}}><a href={props.content["link"]} target="_blank">{props.title}</a></div>
		)
	}
	else {
		return (
			<div className={styles.videoItemContainer}>
				<div className={styles.moveButtonsContainer}>
					<IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.1em"}}>
						<VideoItemMoveUpButton Icon={AiOutlineArrowUp} />
						<VideoItemMoveDownButton Icon={AiOutlineArrowDown} />
					</IconContext.Provider>
				</div>
				<div className={styles.video} style={{backgroundColor: props.color}}><a href={props.content["link"]} target="_blank">{props.title}</a></div>
				<IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.7em"}}>
					<VideoItemEditButton Icon={AiOutlineEdit}/>
					<VideoItemDeleteButton Icon={AiOutlineDelete} />
					<VideoItemAddButton Icon={AiOutlinePlus} />
				</IconContext.Provider>
			</div>
		)
	}
}