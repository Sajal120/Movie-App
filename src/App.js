  import './App.css';
  import Navbar from './components/Navbar';
  import Home from './components/Home.js';
  import AboutView from './components/AboutView.js';
  import { Routes, Route } from 'react-router-dom';
  import SearchView from './components/SearchView.js';
  import { useState, useEffect } from 'react';
  import MovieView from './components/MovieView.js'

  function App() {
    const [searchresults, setsearchresults ] = useState([]);
    const [searchtext, setsearchtext] = useState('');

  
    useEffect(()=> {

      if (searchtext){

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=50638a80e3b7831348ccb63a3f6776dd&language=en-US&query=${searchtext}&page=1&include_adult=false`)
        .then((response) => response.json())  // Add parentheses to call json()
        .then((data) => {
          console.log(data);
          setsearchresults(data.results);
      
          })
      }

    }, [searchtext])

    return (
      
      <div>
        <Navbar searchtext={searchtext} setsearchtext={setsearchtext}/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutView />} />
          <Route path='/SearchView' element={<SearchView keyword={searchtext} searchResults={searchresults} />} />
          <Route path='/movies/:id' element={<MovieView/>}/>
        </Routes>
      </div>
    );
  }

  export default App;
