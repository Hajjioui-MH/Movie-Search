import React ,{Component} from 'react';

const Movie = ({movie,setCurrentMovie})=>{
	return(
			<div className="card col m4 s6">
			    <div className="card-image waves-effect waves-block waves-light">
		    		<img className="activator" style={{height:300}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
			    </div>
			    <div className="card-content">
			      <span className="card-title activator grey-text text-darken-4" style={{fontSize:16,fontWeight: 400}}>{movie.title}<i className="material-icons right">more_vert</i></span>
			    </div>
			    <div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">{movie.title}<i className="material-icons right">close</i></span>
			      <p>release_date : {movie.release_date.substring(5).split('-').concat(movie.release_date.substring(0,4)).join('/')}</p>
			      <p>overview : {movie.overview}</p>
			    </div>
  		</div>
	)
}

export default Movie;