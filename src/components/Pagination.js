import React from 'react';

const Pagination = ({pagesNumbers, nextPgae, currentPage})=>{
	/*const pagesLinks = []
	for (let i = 1; i < pagesNumbers+1; i++) {
		let active = currentPage == i ? 'active' : ''
		pagesLinks.push(<li className={`waves-effect ${active}`} key={i} onClick={()=>nextPgae(i)}><a href="#!">{i}</a></li>)
	}*/
	return(
		<ul className="pagination container row">
			<li className={currentPage>1 ? "waves-effect" : "disabled"} onClick={()=>nextPgae(currentPage-1)}><a href="#!"><i className="material-icons">chevron_left</i></a></li>
			<li>{currentPage}/{pagesNumbers}</li>    	
		    <li className={currentPage<pagesNumbers ? "waves-effect" : "disabled"} onClick={()=>nextPgae(currentPage+1)}><a href="#!"><i className="material-icons">chevron_right</i></a></li>	
	  	</ul>
	)
}
export default Pagination;