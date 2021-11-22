import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { geeks: data }
    }
  }

const showGeeks = ({ geeks }) => {
    return (
        <>
            <Head>
                <title>Next List | List</title>
                <meta name="keywords" content="ninjas"/>
            </Head>
            <h1 className={styles.title}> All Geeks </h1>
            {geeks.map(geek => (
              <Link href={'/geeks/' + geek.id} key={geek.id}>
                    <a className={styles.single}>
                        <h3>{geek.name} ({geek.username}) - {geek.email}</h3>
                        <h3>Lives in {geek.address.city}</h3>
                        {/* <a href={geek.website}>Visit</a> */}
                    </a>
              </Link>
            ))}
        </>
    );
}
 
export default showGeeks;