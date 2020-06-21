import React ,{Component} from 'react';
import Movie from './Movie'

const MovieList = ({movies, setCurrentMovie})=>{
	const MoviesCards = movies.filter(movie=>movie.poster_path !== null)
							.map((movie,i)=> <Movie key={i} movie={movie} 
											setCurrentMovie={setCurrentMovie}/>) 
	return(
		<div className='container row'>
			{MoviesCards}
		</div>
	)
}
export default MovieList;