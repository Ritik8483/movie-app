import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'
import { getSelectedMovieorShow, get_Movies_Shows_details, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import '../movieDetail/MovieDetail.scss'
import { FaStar,FaThumbsUp,FaFilm,FaCalendar } from "react-icons/fa";

const MovieDetail = () => {
  const {imdbID}=useParams();
  const dispatch=useDispatch();
  const selectedData=useSelector(getSelectedMovieorShow);
  console.log('SeletedMovie/Show : ',selectedData);

  useEffect(()=>{
    dispatch(get_Movies_Shows_details(imdbID));
    return()=>{
      dispatch(removeSelectedMovieOrShow())
    }
  },[dispatch,imdbID])

  console.log('ParamsId : ',imdbID);
  return (
    <div>
      <div className="movie-section">
        {
          Object.keys(selectedData).length===0
          ?
          <h2>...loading</h2>
          :
          // (
          <>
            <div className="section-left">
              <div className="movie-title">{selectedData.Title}</div>
              <div className="movie-rating">
                <span>
                  IMDB Rating <FaStar className="fa-star"/> : {selectedData.imdbRating}
                </span>
                <span>
                  IMDB Votes <FaThumbsUp className="fa fa-thumbs-up"/> :{selectedData.imdbVotes}
                  {selectedData.imdbVotes}
                </span>
                <span>
                  Runtime <FaFilm className="fa fa-film"/> : {selectedData.Runtime}
                </span>
                <span>
                  Year <FaCalendar className="fa fa-calendar"/> : {selectedData.Year}
                </span>
              </div>
              <div className="movie-plot">{selectedData.Plot}</div>
              <div className="movie-info">
                <div>
                  <span>Director</span>
                  <span>{selectedData.Director}</span>
                </div>
                <div>
                  <span>Stars</span>
                  <span>{selectedData.Actors}</span>
                </div>
                <div>
                  <span>Generes</span>
                  <span>{selectedData.Genre}</span>
                </div>
                <div>
                  <span>Languages</span>
                  <span>{selectedData.Language}</span>
                </div>
                <div>
                  <span>Awards</span>
                  <span>{selectedData.Awards}</span>
                </div>
              </div>
            </div>
            <div className="section-right">
              <img src={selectedData.Poster} />
            </div>
          </>
          // )
        }
      </div>
    </div>
  )
}

export default MovieDetail