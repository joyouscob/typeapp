import {useEffect} from 'react'
import Head from 'next/head'
import SignUp from '../components/SignUp'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router'


export default function Login() { 
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
      
            <SignUp/>
      
          </>
        )
    }
}
