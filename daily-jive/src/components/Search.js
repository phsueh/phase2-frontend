
import React from "react"


const SearchBar = props => {

   let handleChange = (e) => {
       props.changeSearchTerm(e.target.value)
   }
  
   return (
    <form className="form2" action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input className="searchInput"
            style={{margin:50, height:40, width:400 }}
            value={props.searchTerm} onChange={handleChange}
            type="text"
            placeholder="Search blog posts"
        
        />
    </form>
   )
};


export default SearchBar;