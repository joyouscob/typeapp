import Link from 'next/link'
import { title } from 'process'
import React from 'react'
import { movieListType } from '../../types/movieList'
import { Container, Content, Wrapper } from './styles'

interface Props{
    movieResults: movieListType[],//coming from the type
    category: string,
    addMargin?: boolean,
}

const FilmsRow = ({ movieResults, category }: Props) => {
  
    const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
    return (
        
      <Container>
            <Content {...settings}>
                {movieResults?.filter((item) => item.type === category)
                .map((item) => (
                    <div>
                        
                    <Wrapper key={item.id}>
                      <Link href={`/movies/${item.id}`}>
                            <img src={item.cardImg} alt={item?.title} loading="lazy"/>
                      </Link>

                        </Wrapper>
                    </div>
                ))}
            </Content>
      </Container>

  )
}

export default FilmsRow