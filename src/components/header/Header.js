import React, { useState } from 'react'
import {Link} from "react-router-dom";
// import user from '../../images/user.png'
import '../header/Header.scss';
import { FaSistrix } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { fetchApiMovies, fetchApiShows } from '../../features/movies/movieSlice';

const Header = () => {
  const dispatch=useDispatch();
  const [term,setTerm]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(term===''){
      alert('Please enter something in the search bar first !!');
    }
    dispatch(fetchApiMovies(term));
    dispatch(fetchApiShows(term));
    setTerm('');
    console.log('SearchValue : ',term);
  }
  return (
    <div>
      <div className='header'>
        <div className='logo'><Link to='/'>Movie App</Link></div>
        <div className='search-bar'>
          <form onSubmit={handleSubmit}>
            <input type='text' value={term} onChange={(e)=>setTerm(e.target.value)} placeholder="Search Movies or Shows" />
            <button type='submit'><FaSistrix className='search' /></button>
          </form>
        </div>
        <div className='user-image'>
          <img src="https://imgur.com/ajvpC0t.png" />
        </div>
      </div>
    </div>
  )
}

export default Header