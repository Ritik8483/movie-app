import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import MovieCard from '../movieCard/MovieCard';
import '../movieListing/MovieListing.scss';
import Slider from 'react-slick';
import { settings } from '../../common/apis/settings';

const MovieListing = () => {
  

  const allMovies=useSelector(getAllMovies);
  const allShows=useSelector(getAllShows);

  console.log('AllMovies : ',allMovies);
  let renderMovies='';
  let renderShows='';

  renderMovies=allMovies.Response==="True"
  ? 
  (
    allMovies.Search.map((movie,index)=>{
      return <MovieCard key={index} movieData={movie}/>
    })
  )
  : 
  (
  <div className='movies-error'>
    <h3>{allMovies.Error}</h3>
  </div>
  )

  renderShows=allShows.Response==="True"
  ? 
  (
    allShows.Search.map((movie,index)=>{
      return <MovieCard key={index} movieData={movie}/>
    })
  )
  : 
  (
  <div className='movies-error'>
    <h3>{allShows.Error}</h3>
  </div>
  )

  return (
    <div>
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2>Movies</h2>
          <div className='movie-container'><Slider {...settings} >{renderMovies}</Slider></div>
        </div>
        <div className='movie-list'>
          <h2>Shows</h2>
          <div className='movie-container'><Slider {...settings} >{renderShows}</Slider></div>
        </div>
      </div>
    </div>
  )
}

export default MovieListing