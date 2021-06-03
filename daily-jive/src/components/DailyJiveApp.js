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

    componentDidMount(){
      fetch("http://localhost:3000/jives")
      .then(res => res.json())
      .then(userArr => {
        this.setState({
          usersInfo: userArr
        })
      })
    }
      
    changeSearchTerm = (newTerm) => {
      this.setState ({
        searchTerm: newTerm 
      })
      }
    
    addPostToEndOfState = (newJive) => {
      let arrOfJives = [...this.state.usersInfo, newJive]
      this.setState({
        usersInfo: arrOfJives
      })
    }

    deletePost = () => {
      fetch("http://localhost:3000/jives")
      .then(res => res.json())
      .then(updatedUserArr => {
        this.setState({
          usersInfo: updatedUserArr
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
          <PostForm addPostToEndOfState={this.addPostToEndOfState}/>
          <SearchInput searchTerm = {searchTerm} changeSearchTerm={this.changeSearchTerm}/>
          <PostCollection  usersInfo ={filteredPost} delete={this.deletePost}/>
          </>
        )
    }
    }
    
    export default DailyJivePage
