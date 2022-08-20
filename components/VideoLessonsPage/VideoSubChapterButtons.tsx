import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { useState } from 'react'

export function VideoSubChapterMoveUpButton(props: {Icon: any}) {
	return (
		<button className={styles.moveUp}>
			<props.Icon/>
		</button>
	)
}

export function VideoSubChapterMoveDownButton(props: {Icon: any}) {
	return (
		<button className={styles.moveDown}>
			<props.Icon/>
		</button>
	)
}



export function VideoSubChapterEditButton(props: {Icon: any}) {
	const [modalOpen, onChange] = useState(false);

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}
	
	return (
		<>
			<button className={[styles.videoButton, styles.videoEditButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={() => {console.log("hii")}}>
							<p className={styles.formTitle}>Edit Sub Chapter</p>
							<label className={styles.formLabel} htmlFor="first">Title</label>
							<input className={styles.formField} type="text" id="first" name="first" required />

							{/* <label className={styles.formLabel} htmlFor="last">Link</label>
							<input className={styles.formField} type="text" id="last" name="last" required /> */}

							<div className={styles.formButtonRow}>
								<button className={styles.formSubmitButton} type="submit">Submit</button>
								<button className={styles.formCancelButton} type="reset" onClick={modalToggle}>Cancel</button>
							</div>
						</form>
						</div>
					// </div>
				) : (<></>)
			}
		</>
	)
}



export function VideoSubChapterDeleteButton(props: {Icon: any}) {
	const [modalOpen, onChange] = useState(false);


	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}
	return (
		<>
			<button className={[styles.videoButton, styles.videoDeleteButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={() => {console.log("hii")}}>
							<p className={styles.formTitle}>Are you sure you want to delete?</p>

							<div className={styles.formButtonRow}>
								<button className={styles.formSubmitButton} type="submit">Yes</button>
								<button className={styles.formCancelButton} type="reset" onClick={modalToggle}>No</button>
							</div>
						</form>
						</div>
					// </div>
				) : (<></>)
			}
		</>
	)
}

export function VideoSubChapterAddButton(props: {Icon: any}) {
	const [modalOpen, onChange] = useState(false);

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}

	return (
		<>
			<button className={[styles.videoButton, styles.videoAddButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={() => {console.log("hii")}}>
							<p className={styles.formTitle}>Add Sub Chapter</p>
							<label className={styles.formLabel} htmlFor="first">Title</label>
							<input className={styles.formField} type="text" id="first" name="first" required />

							<div className={styles.formButtonRow}>
								<button className={styles.formSubmitButton} type="submit">Submit</button>
								<button className={styles.formCancelButton} type="reset" onClick={modalToggle}>Cancel</button>
							</div>
						</form>
						</div>
					// </div>
				) : (<></>)
			}
		</>
	)
}

