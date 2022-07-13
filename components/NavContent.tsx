import React, { useState } from 'react'
import styles from '../styles/components/Navbar.module.scss'
import $ from 'jquery';

// toggle hide/show for children of div with given id
function toggleShowHide(id: string) {
	$(`[id='${id}']`).children("div").toggle();
}

// displays all the contents inside a nav folder (recursive function)
export default function NavContent(props: {content: Object, path:string, position:number}) {

	return (
	<>
	 {(() => {
			var ls = []
			// key: the name of the folder
			// value: a dictionary containing all the itmes the folder contains
			// loop thorugh all the contents in the nav folder
			for (const [key, value] of Object.entries(props.content)) {

				// if the item has a link property, set link to path + link
				var link = props.path
				if (value.hasOwnProperty("link")) {
					link += value["link"]
					console.log(link)
				}

				// id={key+"TitleArrow"}
				// id={key+"Title"}
				// if the child is a folder (since it has children)
				if (value.hasOwnProperty("children")) {
					ls.push(
						// nav folder div
						<div className={styles.navFolder} id={key} key={key} style={{backgroundColor: `hsl(${238-(props.position*4)}, 100%, 64%)`}}>
							{/* title div */}
							<p>
								{/* if the nav child has a link, only then we add a href */}
								{value.hasOwnProperty("link") ? (
									<a href={link}>{key}</a>
								) : (
									<a>{key}</a>
								)}

								{/* arrow for folder's title to expand or collapse children */}
								<a onClick={() => { toggleShowHide(key)} } className={styles.navArrow}>
									<span>&gt;</span>
								</a>
							</p>
							{/* display folder's content */}
							<NavContent content={value["children"]} path={link} position={props.position+1}/>
						</div>
					)
				}
				// if the child is a nav item (since it doesn't have children)
				else {
					ls.push(
						<div className={styles.navItems} id={key} key={key} style={{backgroundColor: `hsl(${238-(props.position*4)}, 100%, 64%)`}}>
							<p><a href={link}>{key}</a></p>	
						</div>
					)
				}
			}
			return ls

	})()}
	</>
  )
}
