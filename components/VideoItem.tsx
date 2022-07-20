import React from 'react'
import styles from '../styles/videoLessons.module.scss'


export default function VideoItem(props: { content:any, title: string, color:string}) {
	return (
		<div className={styles.video} style={{backgroundColor: props.color}}><a href={props.content["link"]} target="_blank">{props.title}</a></div>
	)
}