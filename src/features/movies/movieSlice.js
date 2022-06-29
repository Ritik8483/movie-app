import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/movieApi'
import {APIKEY} from '../../common/apis/movieApiKey';

export const fetchApiMovies=createAsyncThunk("movies/fetchApiMovies",async(term)=>{
    // const movieText="Harry";
//   const getMovies= async()=>{
    const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=movie`)
    // .catch((error)=>console.log('Error : ',error))
    // console.log('R : ',response.data.Search);
    return response.data;
})

export const fetchApiShows=createAsyncThunk("movies/fetchApiShows",async(term)=>{
  // const seriesText="Friends";
  const response = await movieApi.get(`?apikey=${APIKEY}&s=${term}&type=series`)
  return response.data;
});

export const get_Movies_Shows_details=createAsyncThunk("movies/get_Movies_Shows_details",async(id)=>{
  // const seriesText="Friends";
  const response = await movieApi.get(`?apikey=${APIKEY}&i=${id}&plot=full`)
  return response.data;
});

const initialState={
  movies: {},
  shows:{},
  selectedMovieOrShow:{},
  loading:false,
}

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // addMovies:(state,action)=>{
    //     state.movies=action.payload;
    // },
    removeSelectedMovieOrShow:(state,action)=>{
      state.selectedMovieOrShow={};
    }
  },
  extraReducers:{
    [fetchApiMovies.pending]:(state)=>{
        console.log('Pending');
        state.loading=true;
    },
    [fetchApiMovies.fulfilled]:(state,action)=>{
        console.log('Successfull ');
        return {
            ...state,
            movies:action.payload,
            loading:false
        };
    },
    [fetchApiShows.fulfilled]:(state,action)=>{
      console.log('Successfull ');
      return {
          ...state,
          shows:action.payload,
          loading:false
      };
    },
    [get_Movies_Shows_details.fulfilled]:(state,action)=>{
      console.log('Successfull ');
      return {
          ...state,
          selectedMovieOrShow:action.payload
      };
    },
  }
});
export const {addMovies,removeSelectedMovieOrShow}=movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies;
export const getAllShows=(state)=>state.movies.shows;
export const getSelectedMovieorShow=(state)=>state.movies.selectedMovieOrShow;
export default movieSlice.reducer;