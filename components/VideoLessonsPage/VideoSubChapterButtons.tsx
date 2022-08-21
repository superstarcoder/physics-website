import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { useState } from 'react'
import Router from "next/router";

export function VideoSubChapterMoveUpButton(props: {Icon: any, myData:any}) {


	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id
		}
		const response = await fetch("/api/videoSubChapter/moveUp", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}


	return (
		<button className={styles.moveUp} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function VideoSubChapterMoveDownButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id
		}
		const response = await fetch("/api/videoSubChapter/moveDown", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	return (
		<button className={styles.moveDown} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}



export function VideoSubChapterEditButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({chapterId: props.myData.chapterId, id: props.myData.id, title: props.myData.title})

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}


	async function callAPI(e: any) {
		e.preventDefault()
		const response = await fetch("/api/videoSubChapter/edit", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	
	return (
		<>
			<button className={[styles.videoButton, styles.videoEditButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={callAPI}>
							<p className={styles.formTitle}>Edit Sub Chapter</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							<input className={styles.formField} type="text" id="title" name="title" defaultValue={props.myData.title}  onChange={e => setFormData({...formData, title: e.target.value})} required />

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



export function VideoSubChapterDeleteButton(props: {Icon: any, myData: any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({id: props.myData.id})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		const response = await fetch("/api/videoSubChapter/delete", { method: "POST", body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}


	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}
	return (
		<>
			<button className={[styles.videoButton, styles.videoDeleteButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={callAPI}>
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

export function VideoSubChapterAddButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({chapterId: props.myData.chapterId, title: "", link: ""})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		const response = await fetch("/api/videoSubChapter/add", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}

	return (
		<>
			<button className={[styles.videoButton, styles.videoAddButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={callAPI}>
							<p className={styles.formTitle}>Add Sub Chapter</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							<input className={styles.formField} type="text" id="title" name="title" onChange={e => setFormData({...formData, title: e.target.value})}  required />

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

