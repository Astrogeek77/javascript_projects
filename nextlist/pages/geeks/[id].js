import Head from 'next/head'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(ninja => {
      return {
        params: { id: ninja.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }

  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { geek: data }
    }
  }
  
  const Details = ({ geek }) => {
    return (
      <>
         <Head>
          <title>{geek.name}</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
        <div>
          <h1>Name - { geek.name } ({geek.username})</h1>
          <h3>E-mail - {geek.email}</h3>
          <h3>Phone - { geek.phone }</h3>
          <h3>Website - { geek.website }</h3>
          <h3>Address - { geek.address.city }</h3>
        </div>
      </>
    );
}
  
export default Details