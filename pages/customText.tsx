import type { NextPage } from 'next'
import Head from 'next/head'
// import styles from '../styles/Home.module.scss'
import styles from "../styles/customText.module.scss"

import { useState } from 'react';
// import { RichTextEditor } from '@mantine/rte';
import RichTextEditor from '../components/RichText';
import { Button } from '@mantine/core';
import Navbar from '../components/Navbar';


const initialValue = 'helloooo';

const isBrowser = typeof window !== "undefined";

const CustomTextPage: NextPage = () => {
  const [value, onChange] = useState(initialValue);
  const [editModeOn, onEditModeOnChange] = useState(false);
	return (
    <div className={styles.container}>
      <Head>
        <title>Physics Website</title>
        <meta charSet="UTF-8" name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        {/* <div className={styles.background}></div> */}
        <div className={styles.textEditorContainer}>
          {
            editModeOn ? (
              <>
                <Button className={styles.editButton} onClick={() => {onEditModeOnChange(!editModeOn); console.log(editModeOn)}}>save</Button>
                <RichTextEditor className={styles.textEditor} value={value} onChange={onChange} styles={{root: { width: "max-content", minWidth: "40vw", minHeight: "30vw", margin: "" }}}/>
              </>
            ) : (
              <>
                <Button className={styles.editButton} onClick={() => {onEditModeOnChange(!editModeOn); console.log(editModeOn)}}>edit</Button>
                <RichTextEditor readOnly className={styles.textEditor} value={value} onChange={onChange} styles={{root: { width: "max-content", minWidth: "40vw", margin: "" }}}/>
              </>
            )
          }
          {/* <Button className={styles.editButton} style={{backgroundColor: "#e35f56"}}>edit</Button> */}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default CustomTextPage
