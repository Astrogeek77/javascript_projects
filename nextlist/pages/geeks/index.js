import styles from '../../styles/Jobs.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { ninjas: data }
    }
  }

const showGeeks = ({ ninjas }) => {
    return (
        <>
            <h1 className={styles.title}> All Geeks </h1>
            {ninjas.map(ninja => (
                <div key={ninja.id}>
                <a className={styles.single}>
                    <h3>{ ninja.name }</h3>
                </a>
                </div>
            ))}
        </>
    );
}
 
export default showGeeks;