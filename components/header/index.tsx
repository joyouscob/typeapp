import React from 'react'
import {useSession, signIn} from 'next-auth/react'
import { Nav, Logo, LoginContainer, Login } from './styles';
import SignedInHeader from './SignedInHeader'


function Header() {
  const { data: session, status } = useSession()

  const renderHeader = () => {
    if (session) return (
      <SignedInHeader session={session} />
    )

    return (
      <LoginContainer>
        <Login onClick={() => signIn()}>
          Login
        </Login>
      </LoginContainer>
    )
  
  }
  return (
    <Nav>
        <Logo src="https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png" alt="Disney Logo" />
        {renderHeader()}
    </Nav>
  )
}

export default Header;