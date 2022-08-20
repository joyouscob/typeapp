import React from 'react'
import { Session } from 'next-auth'
import {signOut} from 'next-auth/react'

import {DropDown, NavMenu, SignOut, UserImg} from '../styles'
interface Props  {
    session: Session
}

function SignedInHeader({ session }: Props) {
  console.log(session)
  const image = session?.user?.image as string
  const username = session?.user?.name as string
  return (
    <>
      <NavMenu >
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>

        <a>
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>

      </NavMenu>

      <SignOut>
        {session && (

          <UserImg src={image} alt={username} />
        )}

        <DropDown>
          <span onClick={() => signOut()}>Sign Out</span>
        </DropDown>
        
      </SignOut>

    </>
  )
}

export default SignedInHeader