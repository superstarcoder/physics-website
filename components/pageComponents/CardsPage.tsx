import React from 'react'
import Head from 'next/head'
import styles from '../../styles/apPhysics.module.scss'

import Card from '../CardsPage/Card'
import MiniCard from '../CardsPage/MiniCard'
import Navbar from '../Navbar'
import { useRouter } from 'next/router'

export default function CardsPage(props: {pageData:any, pagePaths:any, navItemData:any}) {
	const { asPath } = useRouter()
	let editModeOn = true

	let green = 'rgba(200, 255, 205, 1)'
	let orange = 'rgba(255, 222, 199, 0.9)'
	let purple = 'rgba(208, 199, 255, 0.9)'
  
	let miniCardColors = [orange, purple]

  	return (
		<div className={styles.container}>
		<Head>
			<title>Physics Website</title>
			<meta name="description" content="" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Navbar editModeOn={editModeOn} navItemData={props.navItemData}/>
		
		<main className={styles.main}>
			{(() => {
			if (props.pageData.titleName == "AP PHYSICS C") {
				return (<h1 style={{fontSize: props.pageData.titleSize}}><a>AP</a> PHYSICS <a>C</a></h1>)
			}
			else {
				return (<h1 style={{fontSize: props.pageData.titleSize}}>{props.pageData.titleName}</h1>)
			}
			})()}

			{/* render cards */}
			<div className={styles.cards}>
			{(() => {
				let ls = []
				// loop thorugh all the cards
				for (const card of props.pageData.cards) {
					ls.push(
						<Card fileName={card.imagePath} color={green} myData={card} cardTitle={card.title} linkTo={card.relPath} key={card.id} editModeOn={editModeOn} pagePaths={props.pagePaths}/>
					)
				}
				return ls;
			})()}
			</div>

			{/* render multiple rows of mini cards */}
			{(() => {
				let ls = []
				let miniCardsLen:number = props.pageData.miniCards.length 
				let cardsPerRow:number = 3
				let rows:number = (Math.floor((miniCardsLen-1)/cardsPerRow))+1 // calculate number of rows
				let cardIndex = 0
				for (let row = 1; row <= rows; row++) {
					ls.push(<div className={styles.miniCards} key={row}>
						{(() => {

						let ls2 = []

						for (let i = 0; i < cardsPerRow; i++) {

							if (cardIndex >= miniCardsLen) break; // if all cards have been rendered already

							// get key and value using card index
							var miniCard = props.pageData.miniCards[i]
							ls2.push(
							<MiniCard color={miniCardColors[Math.floor(cardIndex / cardsPerRow)]} cardTitle={miniCard.title} linkTo={asPath+miniCard.relPath} key={miniCard.id}/>
							)

							cardIndex++;
						}

						return ls2
						})()}
					</div>)
				}
				return ls;
				})()}
		</main>
		<footer className={styles.footer}>
		</footer>
		</div>
  )
}
