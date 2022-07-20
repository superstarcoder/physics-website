import React from 'react'
import Head from 'next/head'
import styles from '../../styles/apPhysics.module.scss'

import Card from '../Card'
import MiniCard from '../MiniCard'
import Navbar from '../Navbar'
import { useRouter } from 'next/router'

// @ts-ignore
export default function CardsPage(props: {content:any}) {
	const { asPath } = useRouter()

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
		<Navbar />
		
		<main className={styles.main}>
			{/* <div className={styles.background}></div> */}
			{/* @ts-ignore  */}
			{(() => {
			if (props.content["title"]["name"] == "AP PHYSICS C") {
				return (<h1 style={{fontSize: props.content["title"]["font-size"]}}><a>AP</a> PHYSICS <a>C</a></h1>)
			}
			else {
				return (<h1 style={{fontSize: props.content["title"]["font-size"]}}>{props.content["title"]["name"]}</h1>)
			}
			})()}
			{/* <h1 style={{fontSize: cardsPageContent["title"]["font-size"]}}><a>AP</a> PHYSICS <a>C</a></h1> */}

			{/* render cards */}

			<div className={styles.cards}>
			{(() => {
				let ls = []
				// loop thorugh all the cards
				for (const [key, value] of Object.entries(props.content["cards"])) {
				ls.push(
					// @ts-ignore
					<Card fileName={value["image_path"]} color={green} cardTitle={key} linkTo={asPath+value["link"]} key={key}/>
				)
				}
				return ls;
			})()}
			</div>

			{/* render multiple rows of mini cards */}
			
			{(() => {
				let ls = []
				let miniCardsLen:number = Object.keys(props.content["mini cards"]).length
				let cardsPerRow:number = 3
				let rows:number = (Math.floor((miniCardsLen-1)/cardsPerRow))+1 // calculate number of rows
				let cardIndex = 0
				// console.log({miniCardsLen, rows})
				for (let row = 1; row <= rows; row++) {
					ls.push(<div className={styles.miniCards} key={row}>
						{(() => {

						let ls2 = []

						for (let i = 0; i < cardsPerRow; i++) {

							if (cardIndex >= miniCardsLen) break; // if all cards have been rendered already

							// get key and value using card index

							let key = Object.keys(props.content["mini cards"])[cardIndex]
							// @ts-ignore
							let value = props.content["mini cards"][key]

							ls2.push(
							<MiniCard color={miniCardColors[Math.floor(cardIndex / cardsPerRow)]} cardTitle={key} linkTo={asPath+value["link"]} key={key}/>
							)

							cardIndex++;
						}

						return ls2
						})()}
					</div>)
				}

				// let i = 0
				// // let ls = []
				// // loop thorugh all the mini cards
				// for (const [key, value] of Object.entries(cardsPageContent["mini cards"])) {
				//   ls.push(
				//     <MiniCard color={miniCardColors[Math.floor(i / 3)]} cardTitle={key} linkTo={value["link"]}/>
				//   )
				//   i++
				// }
				return ls;
				})()}
		</main>
		<footer className={styles.footer}>
		</footer>
		</div>
  )
}
