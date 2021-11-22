import Link from 'next/link'
import Image from 'next/image'
const navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/logo.png" alt="site logo" width={128} height={77} />
            </div> 
            <div className="links">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/geeks"><a>List</a></Link>
            </div>  
        </nav>
     );
}
 
export default navbar;