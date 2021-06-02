import NavBar from "./Navbar/NavBar"
import SearchInput from "./Search"
import React from "react"
import PostCollection from "./PostCollection"
import PostForm from "./PostForm"
import CategorysSlots from "./Category"




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
        console.log(this.state.usersInfo)

       let { usersInfo, searchTerm} = this.state
    
    //    let usersInfo = this.state.usersInfoObj.filter(jives=> {
    //        return jives.type === "Sports"
    //        })
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
          <CategorysSlots whatIsChosen = {this.state.whatIsChosen} changeWhatIsChosen={this.changeWhatIsChosen}/>
          <PostForm/>
          <SearchInput searchTerm = {searchTerm} changeSearchTerm={this.changeSearchTerm}/>
          <PostCollection usersInfo ={filteredPost} />
          </>
        )
    }
    }
    
    export default DailyJivePage
