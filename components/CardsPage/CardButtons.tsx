import React from 'react'
import styles from '../../styles/components/Card.module.scss'
import { useState } from 'react'
import Router from "next/router";
import {v4 as uuidv4} from "uuid";
import { randomBytes } from 'crypto';
// import { saveAs } from 'file-saver';
// const fs = require('fs');


export function CardMoveLeftButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id,
			pageId: props.myData.pageId
		}
		const response = await fetch("/api/card/moveLeft", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}


	return (
		<button className={[styles.videoButton, styles.moveUp].join(" ")} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function CardMoveRightButton(props: {Icon: any, myData:any}) {

	async function callAPI(e: any) {
		e.preventDefault()
		var formData = {
			id: props.myData.id,
			pageId: props.myData.pageId
		}
		const response = await fetch("/api/card/moveRight", {method: "POST",body: JSON.stringify(formData)})
		Router.reload();
		return await response.json()
	}

	return (
		<button className={[styles.videoButton, styles.moveDown].join(" ")} onClick={callAPI}>
			<props.Icon/>
		</button>
	)
}

export function CardEditButton(props: {Icon: any, myData:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({pageId: props.myData.pageId, id: props.myData.id, title: props.myData.title})

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}


	async function callAPI(e: any) {
		e.preventDefault()
		const response = await fetch("/api/card/edit", {method: "POST",body: JSON.stringify(formData)})
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
							<p className={styles.formTitle}>Edit Card</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							{/*@ts-ignore*/}
							<input className={styles.formField} type="text" id="title" name="title" defaultValue={props.myData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
							<label className={styles.formLabel} htmlFor="bgImg">Color Theme</label>
							<input className={styles.formField} type="color" id="colorPicker" name="colorPicker"/>
							<label className={styles.formLabel} htmlFor="bgImg">Background Image</label>
							<input className={styles.formField} type="file" id="bgImg" name="bgImg"/>
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



export function CardDeleteButton(props: {Icon: any, myData: any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({id: props.myData.id, pageId: props.myData.pageId})

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()
		const response = await fetch("/api/card/delete", { method: "POST", body: JSON.stringify(formData)})
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

export function CardAddButton(props: {Icon: any, myData:any, pagePaths:any}) {
	const [modalOpen, onChange] = useState(false);
	const [formData, setFormData] = useState({pageId: props.myData.pageId, orderNum: props.myData.orderNum+1, title: "", id: uuidv4(), imagePath: "hii", imageFile: "", relPath: ""})
	const [fileData, setFileData] = useState("");

	async function updateVars(e: any) {

		const file = e.target.files[0]
		console.log(file)
		const fileReader = new FileReader();
		fileReader.readAsBinaryString(file)
		fileReader.onload = e => {
			const content = e.target?.result;

			// console.log(content)
			// @ts-ignore
			setFileData(content)
			// @ts-ignore
			setFormData({...formData, imageFile: content})
		}

		// setFileData(file)
		// console.log(fileData)
		// // @ts-ignore
		// const date =  new Date().toLocaleDateString().replaceAll('/', '-').replaceAll('_', '-').replaceAll(' ', '-')
		// const time =  new Date().toLocaleTimeString().replaceAll('/', '-').replaceAll('_', '-').replaceAll(' ', '-')
		// const imagePath =  "saved/card-"+date+"-"+time+"-"+uuidv4()+file.name;
		// // @ts-ignore
		// console.log("imagePath:",imagePath)
		// setFormData({...formData, imagePath: imagePath})
	}
	

	async function callAPI(e: { preventDefault: () => void }) {
		e.preventDefault()

		// var formDataObj = new FormData();
		// formDataObj.append("pageId", formData.pageId)
		// formDataObj.append("orderNum", formData.orderNum)
		// formDataObj.append("title", formData.title)
		// formDataObj.append("id", formData.id)
		// formDataObj.append("imagePath", formData.imagePath)
		// @ts-ignore
		// formDataObj.append("fileData", fileData)
		console.log("formData:")
		console.log(JSON.stringify(formData))
		const response = await fetch("/api/card/add", {method: "POST", body: JSON.stringify(formData)})
		// const response = await fetch("/api/card/add", {
		// 	method: "POST",
		//  	body: formDataObj
		// }).catch(console.error)
		Router.reload();

		// await process();
		// setFormData({...formData, imagePath: "i changeddddddd"})


		return await response.json()
	}

	function modalToggle() { onChange(!modalOpen); if (modalOpen) {document.body.style.overflow = "visible"} else {document.body.style.overflow = "hidden"}}

	return (
		<>
			<button className={[styles.videoButton, styles.videoAddButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						<form className={styles.formContent} onSubmit={callAPI}>
							<p className={styles.formTitle}>Add Card</p>
							<label className={styles.formLabel} htmlFor="title">Title</label>
							<input className={styles.formField} type="text" id="title" name="title" onChange={e => setFormData({...formData, title: e.target.value})} required />
							<label className={styles.formLabel} htmlFor="bgImg">Color Theme</label>
							<input className={styles.formField} type="color" id="colorPicker" name="colorPicker" required/>


							<label className={styles.formLabel} htmlFor="relPath">Link to page</label>
							<select name="relPath" id="relPath"  className={styles.formField} style={{background: "white"}} onChange={e => setFormData({...formData, relPath: e.target.value})} required >
							{(() => {
								let ls = []
								for (const myPath of props.pagePaths) {
									ls.push(<option value={myPath} className={styles.formField} >{myPath}</option>)
								}
								return ls
							})()}

								{/* <option value="volvo"  className={styles.formField} >Volvo</option>
								<option value="saab"  className={styles.formField} >Saab</option>
								<option value="opel"  className={styles.formField} >Opel</option>
								<option value="audi"  className={styles.formField} >Audi</option> */}
							</select>

							<label className={styles.formLabel} htmlFor="bgImg">Background Image</label>
							{/*@ts-ignore*/}
							<input className={styles.formField} type="file" id="bgImg" name="bgImg" onChange={updateVars} required/>
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

