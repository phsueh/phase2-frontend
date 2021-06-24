import NavBar from "./Navbar/NavBar"
import SearchInput from "./Search"
import React from "react"
import PostCollection from "./PostCollection"
import PostForm from "./PostForm"
import CategorysSlots from "./Category"


class DailyJivePage extends React.Component {
    
    state= {
        id: 0,
        usersInfo: [],
        searchTerm: "",
        whatIsChosen:"All",
        username: "",
        password: ""
      }

    setUser = (user) => {

      this.setState({
        id: user.id,
        username: user.username,
        courses: user.courses
      })
      // CHANGE THE URL
      // this.props.history.push("/jives")
  
    }

    componentDidMount(){
      fetch("http://localhost:9393/jives")
      .then(res => res.json())
      .then(userArr => {
        this.setState({
          usersInfo: userArr
        })
      })
    }

    updateMount = () => {
      fetch("http://localhost:9393/jives")
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
      fetch("http://localhost:9393/jives")
      .then(res => res.json())
      .then(updatedUserArr => {
        this.setState({
          usersInfo: updatedUserArr
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
          <NavBar setLoginState={this.setUser}/>
          <PostForm addPostToEndOfState={this.addPostToEndOfState}/>
          <SearchInput searchTerm = {searchTerm} changeSearchTerm={this.changeSearchTerm}/>
          <CategorysSlots whatIsChosen = {this.state.whatIsChosen} changeWhatIsChosen={this.changeWhatIsChosen}/>
          <PostCollection  usersInfo ={filteredPost} delete={this.deletePost} edit={this.updateMount}/>
          </>
        )
    }
    }
    
    export default DailyJivePage
