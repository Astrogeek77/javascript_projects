import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
          <title>Next List | Home</title>
          <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}> Home Page </h1>

        <p className={styles.text}> lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>

        <Link href="/geeks"><a className={styles.btn}>See List</a></Link>
      </div>
    </>
  )
}
