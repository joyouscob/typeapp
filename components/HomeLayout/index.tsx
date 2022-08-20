import React from 'react'
import Categories from './Categories'
import SliderBanner from './SliderBanner'
import { Container } from './styles'

type Props = {}

function HomeLayout({}: Props) {
    return (
      
      <Container>
          {/* SLIDER BANNNER */}
          <SliderBanner/>
            {/* CATEGORIES BANNNER */}
            <Categories />
        {/* ROWS WITH MOVIES BANNNER */}
        <h4>Recommended for You</h4>
        <h4>Trending</h4>
        <h4>New for You</h4>
        <h4>Originals</h4>



    </Container>
  )
}

export default HomeLayout