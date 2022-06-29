import React, { useEffect } from 'react'
import MovieListing from '../movieListing/MovieListing'

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addMovies, fetchApiMovies, fetchApiShows } from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch=useDispatch();
  const movieText='Harry';
  const showText="Friends";
  useEffect(()=>{
    dispatch(fetchApiMovies(movieText));
    dispatch(fetchApiShows(showText));
  },[])
  return (
    <div>
      <div className='banner-img'>
        <MovieListing/>
      </div>
    </div>
  )
}

export default Home