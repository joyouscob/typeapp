import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring';
import React from 'react'
import FilmDetailLayout from '../../components/FilmDetailLayout';
import { movieListType } from '../../types/movieList';


interface Props {
  movieResults: movieListType[]
}

export default function MovieInformation({ movieResults }: Props) {
  console.log(movieResults);
  return (
    <FilmDetailLayout movieResults={movieResults} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/movies');
  const movieData = await res.json();
  const paths = movieData?.map((movie: movieListType) => ({
    params: { id: String(movie.id) }
  }))

  return {
    paths,
    fallback:false,
  }
}

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;

  const movieResults = await fetch(`http://localhost:3000/api/movies/${id}`)
    .then((res) => res.json())
  
  return {
    props: {
      movieResults
    },
    revalidate:1000
  }
}