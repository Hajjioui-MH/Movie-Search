import React ,{Component} from 'react';
import Navbar from './components/Navbar'
import SearchArea from './components/SearchArea'
import MovieList from './components/MovieList'
import Pagination from './components/Pagination'
import {API_KEY} from './constants'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      movies : [],
      searchTerm : '',
      currentPage : 1,
      totalResults : 0,
      currentMovie : null
    }
  }

  //--FUNCTIONS---------------
  handleChange = (e)=>{
    this.setState({searchTerm : e.target.value})
  }
  handleSubmit = (e)=>{
    e.preventDefault()
    const {searchTerm} = this.state
    if (searchTerm) {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}`)
        .then(response=>response.json())
        .then( data=> {
          this.setState({
                  movies : [...data.results], 
                  totalResults : data.total_results,
                  currentPage : 1
                })
        } ).catch((e)=>{console.log(e)});  
    }else{
      alert('please enter a movie title')
    }
  }
  nextPgae = (pageNumber)=>{
    const {searchTerm} = this.state
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${pageNumber}`)
        .then(response=>response.json())
        .then( data=> {
          console.log('nextPgae FUNCTIONS')
          this.setState({movies : [...data.results], currentPage : pageNumber})
        } ).catch((e)=>{console.log(e)});
  }
  setCurrentMovie = (id)=>{
    const movieOn = this.state.movies.filter(movie=>movie.id === id)
    console.log("ooooooooo",movieOn[0])
    this.setState({currentMovie : movieOn[0]})
  }



  //---RENDER()---------------
  render()
  {
    const {movies,totalResults,currentPage} = this.state
    const pagesNumbers = Math.ceil( totalResults/20 )

      return (
        <div className="App">
            <Navbar />
            <SearchArea handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
            <MovieList movies={movies} setCurrentMovie={this.setCurrentMovie}/>
            {totalResults > 20 ? <Pagination pagesNumbers={pagesNumbers} nextPgae={this.nextPgae} currentPage={currentPage}/> : ''}
        </div>
    );  
  }
  
}

export default App;
