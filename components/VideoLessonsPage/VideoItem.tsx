import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";
import { IconContext } from "react-icons";


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
						<button className={styles.moveUp}>
								{/* @ts-ignore  */}
								<AiOutlineArrowUp style={{}}/>
						</button>

						<button className={styles.moveDown}>
								{/* @ts-ignore  */}
								<AiOutlineArrowDown style={{}}/>
						</button>
					</IconContext.Provider>
				</div>
				<div className={styles.video} style={{backgroundColor: props.color}}><a href={props.content["link"]} target="_blank">{props.title}</a></div>
				<IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"2em"}}>
					<button className={[styles.videoButton, styles.videoEditButton].join(" ")}><AiOutlineEdit/></button>
					<button className={[styles.videoButton, styles.videoDeleteButton].join(" ")}><AiOutlineDelete/></button>
					<button className={[styles.videoButton, styles.videoAddButton].join(" ")}><AiOutlinePlus/></button>
				</IconContext.Provider>
			</div>
		)
	}
}