import React from 'react'
import Input from './Input'
import { Container , CTA, DisneyLogo, Description,Headline} from './styles'

function SignUp() {
  return (
      <Container>
        <CTA>
              
          
          <DisneyLogo src="https://static-assets.bamgrid.com/product/disneyplus/images/share-default.14fadd993578b9916f855cebafb71e62.png" alt="Disney Logo" loading="lazy" />
          <Headline>+ More than you'd ever want</Headline>
          <Description>
              Enter your email to create or start your subscription.
          </Description>
          {/* <Input /> */}
          
          <Description>
              Get 12 months for the price of 10months when you sign
              up for an annual subscription!
              Movie Channel, compared to paying monthly
              </Description>
              <Input />

        </CTA>

    </Container>
  )
}

export default SignUp