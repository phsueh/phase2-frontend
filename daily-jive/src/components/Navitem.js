import React, {Component} from 'react'


export default class NavBar extends Component {

    render(){
        return(
            <div className="topnav">
  <a className="active" href="#home">Sign In</a>
  <a href="#news">Home</a>
  <a href="#contact">My Favorites</a>
</div>
        )
    }

}