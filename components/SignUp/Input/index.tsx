import { signIn } from 'next-auth/react'
import React from 'react'
import { Container,EmailInput,SignupLink } from './styles'

function Input() {
  return (
      <Container>
          <EmailInput placeholder="Email" />
          <SignupLink onClick={() => signIn()}>
              Continue
          </SignupLink>
    </Container>
  )
}

export default Input