import React from 'react';

const SearchArea = ({handleChange,handleSubmit})=>{
	return (
		<div className='container row'>
				<div className='col s4 offset-s4'>
					<form onSubmit={handleSubmit}>
						<input placeholder="Search a movie" type="search" className="search-movie center" 
						onChange={handleChange}/>
					</form>
				</div>
		</div>
	)
}
export default SearchArea;