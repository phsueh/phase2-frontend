
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