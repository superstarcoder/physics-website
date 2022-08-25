import React from 'react'
// import styles from './Card.module.scss'
import styles from '../../styles/components/MiniCard.module.scss'

export default function MiniCard(props: {color:string, cardTitle: string, linkTo: string}) {
  return (
	<button className={styles.miniCard} onClick={() => window.open(props.linkTo, '_self')} style={{backgroundColor: props.color}}>
		<p>{props.cardTitle}</p>
	</button>
  )
}