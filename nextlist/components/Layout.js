import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

const layout = ({ children }) => {
    return ( 
        <div className={styles.container}>
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default layout;