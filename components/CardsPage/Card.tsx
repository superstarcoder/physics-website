import React from 'react'
// import styles from './Card.module.scss'
import styles from '../../styles/components/Card.module.scss'
import { IconContext } from "react-icons";
import {CardAddButton, CardDeleteButton, CardEditButton, CardMoveLeftButton, CardMoveRightButton} from './CardButtons'
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineDelete, AiOutlineEdit, AiOutlinePlus} from "react-icons/ai";


export default function Card(props: {fileName: string, color:string, cardTitle: string, linkTo: string, myData: any, editModeOn: boolean}) {
  return (
		

		<div className={styles.cardContainer}>

			{props.editModeOn && (
				<IconContext.Provider value={{ color: "black", className: "arrowIcon", size:"1.1em"}}>
					<div className={styles.editModeButtonsContainer}>
						<CardMoveLeftButton Icon={AiOutlineArrowLeft} myData={props.myData} />
						<CardMoveRightButton Icon={AiOutlineArrowRight} myData={props.myData} />
						<CardEditButton Icon={AiOutlineEdit} myData={props.myData}/>
						<CardDeleteButton Icon={AiOutlineDelete} myData={props.myData} />
						<CardAddButton Icon={AiOutlinePlus} myData={props.myData} />
					</div>
				</IconContext.Provider>
			)}

			<div className={styles.card} onClick={() => window.open(props.linkTo, '_self')}>
				<div className={styles.cardBackground} style={{backgroundImage: `url('${props.fileName}')`}}></div>
				<div className={styles.cardTitleBar} style={{backgroundColor: props.color}}>
					<p>{props.cardTitle}</p>
				</div>
			</div>
		</div>
  )
}