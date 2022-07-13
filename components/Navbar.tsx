import React, { useEffect } from 'react';
import styles from '../styles/components/Navbar.module.scss'
import Navfolder from './Navfolder'
import $, { data } from 'jquery';

function toggleId(className:string, id:string)
{
    // var tag = document.querySelector('.'+className);
	// if (tag != null)
    // 	tag.id = tag.getAttribute("id") ? '' : id;

	$(`[class='${className}']`).children("div").toggle();
	var tags = document.getElementsByClassName(className)
	var tag
	for (var i = 0; i < tags.length; i++) {
		tag = tags[i]
		if (tag != null)
			tag.id = tag.getAttribute("id") ? '' : id
	}
}


/*
AP Physics C [/ap-physics]
	AP Exam Preperation [/ap-prep]
	Chapter 2, 3, 4 [/chapters-2-3-4]
Physics Honors [/physics-honors]

 */
// var fileStructure = {
// 	"AP Physics C" : { link : "/ap-physics",
// 		"AP Exam Preperation" : { link: "/ap-prep" },
// 		"Notes, Presentations, Supplemental Videos" : {
// 			"Chapter 2, 3, 4" : { link: "/chapters-2-3-4", }
// 		}
// 	},
// }

var fileStructure = {
	"AP Physics C" : {
		link: "/ap-physics",
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
			 }
		}
	}
}

export default function Navbar() {

	// runs when DOM loads
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
		<div className={styles.navbarContainer} id="">
			{/* <div className={styles.navFolder}> */}
				{/* <p>AP Physics C <span onClick={() => toggleId(styles.navFolderTwo, "expanded")}>&gt;</span></p> */}
					<Navfolder content={fileStructure} path=""/>


					{/* <div className={styles.navFolderTwo} id="">
						<p>AP Exam Preperation <span >&gt;</span></p>
					</div> 
					<div className={styles.navFolderTwo} id="">
						<p>Chapter 2, 3, 4 <span>&gt;</span></p>
						<div className={styles.navItems}>
							<p>Videos</p>
						</div>
						<div className={styles.navItems}>
							<p>Videos</p>
						</div>
						<div className={styles.navItems}>
							<p>Videos</p>
						</div>
					</div> */}

			{/* </div> */}

		</div>
		<button className={styles.box} onClick={() => {toggleId(styles.navbarContainer, "expanded")}}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
		</button>
	

	</>
  )
}