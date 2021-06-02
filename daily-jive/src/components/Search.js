<<<<<<< HEAD

import React from "react"


const SearchBar = props => {

   let handleChange = (e) => {
       props.changeSearchTerm(e.target.value)
   }
  
   return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            value={props.searchTerm} onChange={handleChange}
            type="text"
            placeholder="Search blog posts"
        
        />
        <button type="submit">Search</button>
    </form>
   )
};


export default SearchBar;
=======
export default function searchBar() {
    return(
        <>
            <label htmlFor="site-search">Search the site:</label>
    <input type="search" id="site-search" name="q"
       aria-label="Search through site content"></input>

   <button>Search</button>
   </>
    )
}
>>>>>>> dbde6f17f31e5584db7079bf735f2b50b328c92d
