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
