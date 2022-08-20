import Head from 'next/head'
import {useEffect} from 'react'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import HomeLayout from '../components/HomeLayout'


export default function Home() {
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
    
  if (!session) {
        
        return (
          <>
            <Head>
              <title>Login Page - TypeScript with Styled Components</title>
              <meta name="description" content="Login page" />
              <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeLayout />
      
          </>
        )
    }
}
