import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Navbar({navBar}) {
  return (
    <div>
        <nav className={styles.flex}>

        {navBar?.map((navItem, i) => {

          const text = {__html: navItem.rendered}
          return(
            <Link href={`/posts/${navItem.id}`} key={i}>
            <li style={{border:'solid 0.01px', listStyleType: 'none' }} className={styles.card}>
              <a dangerouslySetInnerHTML={text}></a>
            </li>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar