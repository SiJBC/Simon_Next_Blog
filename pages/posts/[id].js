import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { getNavbar } from '../../dataHelpers'
import Navbar from '../../components/Navbar'

function Post({post, navBar}) {
  const postData = {__html: post.content.rendered}
  return (
    <>
    <Navbar navBar= {navBar} />
    <Link href={'/'}>
                <li style={{ listStyleType: 'none' }} className={styles.card}>
                    HOME
                </li>
            </Link>
      <main className={styles.main}>
      <div className={styles.container}>
      <article dangerouslySetInnerHTML={postData} />
      </div>
    </main>
    </>
  )
}

export async function getStaticPaths(){
    const res = await fetch('https://www.simoncolman.com/wp-json/wp/v2/posts/')
    const posts = await res.json()
    const paths = posts.map((post) =>({
      params: {id: post.id.toString()}
    }))
    return {paths, fallback: false}
}

export async function getStaticProps({params}){
  const res = await fetch(`https://www.simoncolman.com/wp-json/wp/v2/posts/${params.id}`)
  const post = await res.json()
  const nav = await getNavbar()
  return{
    props: {
      post: post,
      navBar: nav
    }
  }
}

export default Post