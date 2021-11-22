import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
const aboutPage = () => {
    return (
        <>
        <Head>
            <title>Next List | About</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
        <div>
            <h1 className={styles.title}> About Page </h1>

            <p> lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            <p> lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
            <Link href="/geeks"><a className={styles.btn}>See List</a></Link>
         </div>
       </> 
     );
}
 
export default aboutPage;