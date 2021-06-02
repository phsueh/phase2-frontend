import NavBar from "./Navbar/NavBar"
import SearchInput from "./Search"
import React from "react"
import PostCollection from "./PostCollection"
import PostForm from "./PostForm"




class DailyJivePage extends React.Component {
    
    state= {
        usersInfo: [],
        searchTerm: ""
      }
      
      changeSearchTerm = (newTerm) => {
      this.setState ({
        searchTerm: newTerm 
      })
      }
    
    
    componentDidMount(){
      fetch("http://localhost:3000/jives")
      .then(res => res.json())
      .then(userArr => {
        this.setState({
          usersInfo: userArr
        })
      })
    }
    
    
    render(){
        
       let {usersInfo,searchTerm} = this.state
    
       console.log(searchTerm)
       let filteredPost = usersInfo.filter(usersInfoObj => {
         return usersInfoObj.post.includes(searchTerm)
       })
    
        return(
            <>
          <NavBar />
          <PostForm/>
          <SearchInput searchTerm = {searchTerm} changeSearchTerm={this.changeSearchTerm}/>
          <PostCollection usersInfo ={filteredPost} />
          </>
        )
    }
    }
    
    export default DailyJivePage
