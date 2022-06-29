import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetail from './components/movieDetail/MovieDetail';
import PageNotFound from './components/pageNotFound/PageNotFound';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header/>
          <div className='mainContainer'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/movie/:imdbID' element={<MovieDetail/>} />
              <Route path='*' element={<PageNotFound/>} />
            </Routes>
          </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
