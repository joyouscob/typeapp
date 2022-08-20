import Head from 'next/head'
import {useEffect} from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import HomeLayout from '../components/HomeLayout'
import { movieListType } from '../types/movieList'
import { GetServerSideProps } from 'next'

interface Props{
  movieResults: movieListType[] //coming from the type
}
export default function Home({ movieResults }: Props) {
  
  console.log(movieResults)
    const { data: session, status } = useSession()
    const router = useRouter();
    
    useEffect(() => {
        if (session) {
            //redirect to home Pgae
            router.push({
                pathname:'/'
            })
        }
        //return anonymouns function
        return () => { };
      
    }, [])

    if (status === 'loading') return <p>...Loading</p>
    

        return (
          <>
            <Head>
              <title>Login Page - TypeScript with Styled Components</title>
              <meta name="description" content="Login page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeLayout movieResults={movieResults} />
      
          </>
        )

  
}
export const getServerSideProps: GetServerSideProps = async () => {
  const movieResults = await fetch("http://localhost:3000/api/movies").then(
    (res) => res.json()
  );

  return {
    props:{
      movieResults
    }
  }

}
