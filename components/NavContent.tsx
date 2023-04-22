import React, { useState } from 'react'
import styles from '../styles/components/Navbar.module.scss'
import $ from 'jquery';

// toggle hide/show for children of div with given id
function toggleShowHide(id: string) {
	$(`[id='${id}']`).children("div").toggle();
}

// displays all the contents inside a nav folder (recursive function)
export default function NavContent(props: {content: Object, path:string, position:number, navItemData:any}) {

	return (
	<>
	 {(() => {
			var ls = []
			// key: the name of the folder
			// value: a dictionary containing all the itmes the folder contains
			// loop thorugh all the contents in the nav folder
			// for (const [key, value] of Object.entries(props.content)) {
				for (const navItem of props.navItemData) {

				// // if the item has a link property, set link to path + link
				// var link = props.path
				// if (value.hasOwnProperty("link")) {
				// 	link += value["link"]
				// 	// console.log(link)
				// }

				// id={key+"TitleArrow"}
				// id={key+"Title"}
				// if the child is a folder (since it has children)
				// if (value.hasOwnProperty("children")) {
					console.log(navItem.navItems)
				if (navItem.navItems != undefined && navItem.navItems.length != 0) {

					console.log("detected as nav folder")
					console.log(navItem)

					ls.push(
						// nav folder div
						<div className={styles.navFolder} id={navItem.id} key={navItem.id} style={{backgroundColor: `hsl(${238-(props.position*4)}, 100%, 64%)`}}>
							{/* title div */}
							<p>
								{/* if the nav child has a link, only then we add a href */}
								{navItem.page != undefined ? (
									<a href={navItem.page.path}>{navItem.title}</a>
								) : (
									<a>{navItem.title}</a>
								)}

								{/* arrow for folder's title to expand or collapse children */}
								<a onClick={() => { toggleShowHide(navItem.id)} } className={styles.navArrow}>
									<span>&gt;</span>
								</a>
							</p>
							{/* display folder's content */}
							{/*@ts-ignore*/}
							<NavContent content={{}} path={""} position={props.position+1} navItemData={navItem.navItems}/>
						</div>
					)
				}
				// if the child is a nav item (since it doesn't have children)
				else {
					console.log("detected as nav item (not a folder)")
					console.log(navItem)
					ls.push(
						<div className={styles.navItems} id={navItem.id} key={navItem.id} style={{backgroundColor: `hsl(${238-(props.position*4)}, 100%, 64%)`}}>
							<p><a href={navItem.page.path}>{navItem.title}</a></p>	
						</div>
					)
				}
			}
			return ls

	})()}
	</>
  )
}
