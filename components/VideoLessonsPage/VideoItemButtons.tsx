import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { useState } from 'react'
import Router from "next/router";

export function VideoItemMoveUpButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id
		}
		const response = await fetch("/api/videoItem/moveUp", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	return (
		<button className={styles.moveUp} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function VideoItemMoveDownButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id
		}
		const response = await fetch("/api/videoItem/moveDown", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	
	return (
		<button className={styles.moveDown} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function VideoItemEditButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({subChapterId: props.myData.subChapterId, id: props.myData.id, title: props.myData.title, link: props.myData.link,})

	async function callAPI(e: any) {
		e.preventDefault()
		console.log("FORM DATA",formData)
		const response = await fetch("/api/videoItem/edit", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}

	return (
		<>
			<button className={[styles.videoButton, styles.videoEditButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						<form className={styles.formContent} onSubmit={callAPI}>
							<p className={styles.formTitle}>Edit Video Item</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							<input className={styles.formField} type="text" id="title" title="title" defaultValue={props.myData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />

							<label className={styles.formLabel} htmlFor="link">Link</label>
							<input className={styles.formField} type="text" id="link" name="link" defaultValue={props.myData.link} onChange={e => setFormData({...formData, link: e.target.value})} required />

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



export function VideoItemDeleteButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}
	const [formData, setFormData] = useState({id: props.myData.id})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		console.log("FORM DATA",formData)
		const response = await fetch("/api/videoItem/delete", { method: "POST", body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

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

export function VideoItemAddButton(props: {Icon: any, myData: any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({subChapterId: props.myData.subChapterId, title: "", link: ""})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		console.log("FORM DATA",formData)
		const response = await fetch("/api/videoItem/add", {method: "POST",body: JSON.stringify(formData)})
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
						<form className={styles.formContent} onSubmit={callAPI}
						>
							<p className={styles.formTitle}>Add Video Item</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							<input className={styles.formField} type="text" id="title" name="title" onChange={e => setFormData({...formData, title: e.target.value})} required />

							<label className={styles.formLabel} htmlFor="link">Link</label>
							<input className={styles.formField} type="text" id="link" name="link"  onChange={e => setFormData({...formData, link: e.target.value})} required />

							<div className={styles.formButtonRow}>
								<button className={styles.formSubmitButton} type="submit">Submit</button>
								<button className={styles.formCancelButton} type="reset" onClick={modalToggle}>Cancel</button>
							</div>
						</form>
						</div>
				) : (<></>)
			}
		</>
	)
}

