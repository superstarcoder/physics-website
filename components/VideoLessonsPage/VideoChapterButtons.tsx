import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { useState } from 'react'
import Router from "next/router";
import {v4 as uuidv4} from "uuid";

export function VideoChapterMoveUpButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id,
			pageId: props.myData.pageId
		}
		const response = await fetch("/api/videoChapter/moveUp", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}


	return (
		<button className={styles.moveUp} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function VideoChapterMoveDownButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id,
			pageId: props.myData.pageId
		}
		const response = await fetch("/api/videoChapter/moveDown", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	return (
		<button className={styles.moveDown} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function VideoChapterEditButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({pageId: props.myData.pageId, id: props.myData.id, title: props.myData.title})

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}


	async function callAPI(e: any) {
		e.preventDefault()
		const response = await fetch("/api/videoChapter/edit", {method: "POST",body: JSON.stringify(formData)})
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
							<p className={styles.formTitle}>Edit Chapter</p>
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



export function VideoChapterDeleteButton(props: {Icon: any, myData: any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({id: props.myData.id, pageId: props.myData.pageId})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		const response = await fetch("/api/videoChapter/delete", { method: "POST", body: JSON.stringify(formData)})
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

export function VideoChapterAddButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({pageId: props.myData.pageId, orderNum: props.myData.orderNum+1, title: "", id: uuidv4()})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		const response = await fetch("/api/videoChapter/add", {
			method: "POST",
			body: JSON.stringify(formData)
		})

		var subChapterId = uuidv4()
		const response2 = await fetch("/api/videoSubChapter/add", {method: "POST",body: JSON.stringify({
			// @ts-ignore
			chapterId: formData.id, title: "Sub Chapter", orderNum: 1, id: subChapterId
		})})

		// .then(response => {
		// 	console.log("response: ", response)
		// })
		console.log("response after: ", response)
		// const data = await response.json();
		// console.log("data after: ", data)

		const response3 = await fetch("/api/videoItem/add", {method: "POST",body: JSON.stringify({
			// @ts-ignore
			subChapterId: subChapterId, title: "Video Item", link: "https://www.youtube.com/", orderNum: 1
		})})
		Router.reload();
		// return await response.json()
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
							<p className={styles.formTitle}>Add Chapter</p>
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

