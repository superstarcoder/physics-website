import React from 'react'
// import styles from './Card.module.scss'
import styles from '../../styles/components/Card.module.scss'
import { IconContext } from "react-icons";
import {CardAddButton, CardDeleteButton, CardEditButton, CardMoveLeftButton, CardMoveRightButton} from './CardButtons'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";


export default function Card(props: {fileName: string, color:string, cardTitle: string, linkTo: string, myData: any, editModeOn: boolean, pagePaths:any}) {

	// var srcValue
	// if (props.myData.imageFile != null) {
	// 	console.log("wWOOO")
	// 	var base64ImageString = Buffer.from(props.myData.imageFile, 'binary').toString('base64')
	// 	srcValue = "data:image/png;base64,"+base64ImageString
	// 	console.log(base64ImageString)
	// }

	var base64ImageString = props.myData.imageFile
	var srcValue = "data:image/png;base64,"+base64ImageString

  return (
		

		<div className={styles.cardContainer}>

			{props.editModeOn && (
				<IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.1em"}}>
					<div className={styles.editModeButtonsContainer}>
						<CardMoveLeftButton Icon={AiOutlineArrowLeft} myData={props.myData} />
						<CardMoveRightButton Icon={AiOutlineArrowRight} myData={props.myData} />
						<CardEditButton Icon={AiOutlineEdit} myData={props.myData}/>
						<CardDeleteButton Icon={AiOutlineDelete} myData={props.myData} />
						<CardAddButton Icon={AiOutlinePlus} myData={props.myData} pagePaths={props.pagePaths}/>
					</div>
				</IconContext.Provider>
			)}

			<div className={styles.card} onClick={() => window.open(props.linkTo, '_self')}>
				{ props.myData.imageFile == null ?
					<div className={styles.cardBackground} style={{backgroundImage: `url('${props.fileName}')`}}></div>
					:
					<div className={styles.cardBackground} style={{backgroundImage: `url('${srcValue}')` }}></div>
				}
				<div className={styles.cardTitleBar} style={{backgroundColor: props.color}}>
					<p>{props.cardTitle}</p>
				</div>
			</div>
		</div>
  )
}