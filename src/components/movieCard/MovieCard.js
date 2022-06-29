import React from 'react'
import { Link } from 'react-router-dom';
import '../movieCard/MovieCard.scss';

const MovieCard = ({movieData}) => {
  return (
    <div>
      <div className='card-item'>
        <Link to={`/movie/${movieData.imdbID}`}>
        <div className='card-inner'>
          <div className='card-top'>
            <img src={movieData.Poster} />
          </div>
          <div className='card-bottom'>
            <div className='card-info'>
              <h4>{movieData.Title}</h4>
              <p>{movieData.Year}</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default MovieCard