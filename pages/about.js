import React from 'react'
import styles from '../styles/Home.module.css'

function about() {
  return (
    <main className={styles.main}>
    <h1 className={styles.title}>
     About Simon
      <br></br> 
      <a style={{ fontSize: '24px' }} href="https://nextjs.org">Go To Wordpress Version ?</a>
    </h1>
    </main>
  )
}

export default about