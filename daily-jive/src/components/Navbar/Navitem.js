import React, {Component} from 'react'


export default class NavBar extends Component {

  state = {
    username: "",
    password: ""
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    fetch("http://localhost:9393/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
        })
    })
    .then(res => res.json())
    .then((user) => {
        if(user.error){
            alert(user.error)
        } else {
            console.log(user)
            this.props.setLoginState(user)
            alert("Welcome to the Daily Jive")
        }
    })

}


  render(){
    console.log(this.state)
      return(
        <div className="topnav">
          <a className="active" href="#home">Sign In</a>
          <a href="#news">Home</a>
          <a href="#contact">My Favorites</a>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
              <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
              <input type="submit" value="login"/>
            </form>
          </div>
        </div>
      )
  }

}