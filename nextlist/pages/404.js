import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [router])
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found </h2>
      <p>You will be redirected to  <Link href="/"><a>Homepage</a></Link> in 3 seconds</p>
    </div>
  );
}
 
export default NotFound;