import React, { useEffect } from 'react';
import styles from '../styles/components/Navbar.module.scss'
import $ from 'jquery';
import NavContent from './NavContent';

function toggleId(className:string, id:string)
{
	$(`[class='${className}']`).children("div").toggle();
	var tags = document.getElementsByClassName(className)
	var tag
	for (var i = 0; i < tags.length; i++) {
		tag = tags[i]
		if (tag != null)
			tag.id = tag.getAttribute("id") ? '' : id
	}
}

var fileStructure = {
	"AP Physics C" : {
		link: "/apPhysics",
		children: {
			 "AP Exam Preperation" : {
				link: "/ap-prep"
			 },
			 "Notes, Presentations, Supplemental Videos" : {
				 children: {
					"Chapter 2, 3, 4" : {
						link: "/chapters-2-3-4",
					},
					"Chapter 4, 5, 6" : {
						link: "/chapters-2-3-4",
					}
				 }
			 },
			 "Another thing" : {
				link: "/aaa",
				children: {}
			 },
		}
	},
}

export default function Navbar() {

	// runs when DOM loads
	// hides navbar text and sets id to '' (instead of 'expanded) for the navbar
	useEffect(() => {
		let className = styles.navbarContainer
		$(`[class='${className}']`).children("div").hide()
		var tags = document.getElementsByClassName(className)
		var tag
		for (var i = 0; i < tags.length; i++) {
			tag = tags[i]
			if (tag != null)
				tag.id = ''
		}
	});

  	return (
	<>
		{/* navbar contents */}
		<div className={styles.navbarContainer} id="">
			<NavContent content={fileStructure} path="" position={1}/>
		</div>

		{/* navbar logo */}
		<button className={styles.box} onClick={() => {toggleId(styles.navbarContainer, "expanded")}}>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
			<div className={styles.line}></div>
		</button>
	</>
  )
}