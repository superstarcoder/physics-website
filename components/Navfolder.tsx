import Link from 'next/link'
import React, { useState } from 'react'
import { compileString } from 'sass'
import styles from '../styles/components/Navbar.module.scss'
import $, { data } from 'jquery';


// function render(props: {content: any}) {
// 	// for (var i = 0; i < Object.keys(props.content).length; i++) {

// 	// }
// 	for (var property in props.content) {
// 		if (property.constructor.name == "Object"){
// 			return <Navfolder content={props.content[property]} />
// 		}
// 	}
// }


function toggleShowHide(id: string) {
	// hide a div that is a child of current div
	$(`[id='${id}']`).children("div").toggle();
	
	// toggle "flip" property to rotate arrow
	// setOpen(!open)

	
	// var arrowClass = $(`[id='${id+"TitleArrow"}']`)
	// console.log(arrowClass)
	// let value = arrowClass.data('open') == "true" ? "false" : "true"
	// arrowClass.data('open', value)
	// console.log(arrowClass.data('open'))
	// console.log($(`[id='${id+"TitleArrow"}']`).data('open'))

	// var arrowClass = $(`[id='${id+"TitleArrow"}']`)
	// console.log(arrowClass)
	// arrowClass.toggleClass('flip');
}

// function loopThroughObj(obj: Object, path:any="") {

// 	var ls = []
// 	for (const [key, value] of Object.entries(obj)) {
// 		// console.log(key)
// 		// console.log(value)


// 		// update link
// 		var link = path
// 		if (value.hasOwnProperty("link")) {
// 			link += value["link"]
// 			console.log(link)
// 		}


// 		// if it's a nav folder
// 		if (value.hasOwnProperty("children")) {
// 			ls.push(
// 				<div className={styles.navFolder} id={key} key={key}>
// 					<p id={key+"Title"}>
// 						<a href={link}>{key}</a>
// 						<a onClick={() => toggleShowHide(key)} id={key+"TitleArrow"} className={styles.navArrow} data-open="true">
// 							<span>&gt;</span>
// 						</a>
// 					</p>
// 					{loopThroughObj(value["children"], link)}
// 				</div>
// 			)
// 		}
// 		// if it's a nav item
// 		else {
// 			ls.push(
// 				<div className={styles.navItems} id={key} key={key}>
// 					{/* <p><a href={link}>{key}</a> <a onClick={() => toggleShowHide(key)}><span>&gt;</span></a></p>	 */}
// 					<p><a href={link}>{key}</a> <a onClick={() => toggleShowHide(key)}></a></p>	
// 				</div>
// 			)
// 		}
// 	}
// 	return ls

// }

export default function Navfolder(props: {content: Object, path:string}) {
	const [open, setOpen] = useState(true);


	return (
	
	<>
	 {(() => {
			var ls = []
			for (const [key, value] of Object.entries(props.content)) {
				// console.log(key)
				// console.log(value)
		
		
				// update link
				var link = props.path
				if (value.hasOwnProperty("link")) {
					link += value["link"]
					console.log(link)
				}
		
		
				// if it's a nav folder
				if (value.hasOwnProperty("children")) {
					ls.push(
						<div className={styles.navFolder} id={key} key={key}>
							<p id={key+"Title"}>
								<a href={link}>{key}</a>
								<a onClick={() => { toggleShowHide(key); setOpen(!open)} } id={key+"TitleArrow"} className={styles.navArrow} data-open={open.toString()}>
									<span>&gt;</span>
								</a>
							</p>
							{/* {loopThroughObj(value["children"], link)} */}
							<Navfolder content={value["children"]} path={link}/>
						</div>
					)
				}
				// if it's a nav item
				else {
					ls.push(
						<div className={styles.navItems} id={key} key={key}>
							{/* <p><a href={link}>{key}</a> <a onClick={() => toggleShowHide(key)}><span>&gt;</span></a></p>	 */}
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
