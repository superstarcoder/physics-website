import React from 'react'
// import styles from './Card.module.scss'
import styles from '../styles/components/Card.module.scss'

export default function Card(props: {fileName: string, color:string, cardTitle: string, linkTo: string}) {
  return (
	<button className={styles.card} onClick={() => window.open(props.linkTo, '_self')}>
		<div className={styles.cardBackground} style={{backgroundImage: `url('${props.fileName}')`}}></div>
		<div className={styles.cardTitleBar} style={{backgroundColor: props.color}}>
			<p>{props.cardTitle}</p>
		</div>
	</button>
  )
}