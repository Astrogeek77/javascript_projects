import Link from 'next/link'
const navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1> Next List </h1>
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