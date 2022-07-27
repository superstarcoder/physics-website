import React from 'react'
import styles from '../../styles/videoLessons.module.scss'
import { useState } from 'react'



export default function VideoEditButton(props: {Icon: any}) {
	const [modalOpen, onChange] = useState(false);

	function modalToggle() {
		onChange(!modalOpen)
		if (modalOpen) {
			document.body.style.overflow = "visible"
		}
		else {
			document.body.style.overflow = "hidden"
		}
		console.log(modalOpen)
	}

	return (
		<>
			<button className={[styles.videoButton, styles.videoEditButton].join(" ")} onClick={modalToggle}><props.Icon/></button>
			{
				modalOpen ? (
					<div className={styles.modalForm}>
						{/* <div > */}
						{/* <form action="/api/form" method="post"> */}
						<form className={styles.formContent} onSubmit={() => {console.log("hii")}}>
							<label className={styles.formLabel} htmlFor="first">Title</label>
							<input className={styles.formField} type="text" id="first" name="first" required />

							<label className={styles.formLabel} htmlFor="last">Link</label>
							<input className={styles.formField} type="text" id="last" name="last" required />

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