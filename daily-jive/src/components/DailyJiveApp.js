import NavBar from "./Navbar/NavBar"
import SearchInput from "./Search"
import React from "react"
import PostCollection from "./PostCollection"
import PostForm from "./PostForm"
import CategorysSlots from "./Category"
import Login from "./Login"




class DailyJivePage extends React.Component {
    
    state= {
        usersInfo: [],
        searchTerm: "",
        whatIsChosen:"All"
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

    componentDidMount(){
      fetch("http://localhost:3000/jives")
      .then(res => res.json())
      .then(userArr => {
        this.setState({
          usersInfo: userArr
        })
      })
    }
    

    changeWhatIsChosen = (newChoice) => {
        this.setState({
            whatIsChosen: newChoice
        })
    }
    
    render(){
        // console.log(this.state.usersInfo)

       let {searchTerm} = this.state
    
      let usersInfo = this.state.usersInfo.filter(jives=> {
        return jives.type === this.state.whatIsChosen
        })

        if(this.state.whatIsChosen === "All"){
            usersInfo = this.state.usersInfo
        }
    //    let arrayOfJives = this.state.jives.filter(jives=> {
    //    return jives.type === "Sports"
    //    })
     
    //    console.log(searchTerm)
       let filteredPost = usersInfo.filter(usersInfoObj => {
         return usersInfoObj.post.includes(searchTerm)
       })
    
        return(
            <>
          <NavBar />
          <Login />
          <CategorysSlots whatIsChosen = {this.state.whatIsChosen} changeWhatIsChosen={this.changeWhatIsChosen}/>
          <PostForm addPostToEndOfState={this.addPostToEndOfState}/>
          <SearchInput searchTerm = {searchTerm} changeSearchTerm={this.changeSearchTerm}/>
          <PostCollection usersInfo ={filteredPost} />
          </>
        )
    }
    }
    
    export default DailyJivePage
