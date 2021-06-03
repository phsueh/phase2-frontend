import React, {Component} from 'react'


export default class NavBar extends Component {

    render(){
        return(
      <div className="topnav">
         <a href="#news" className="navDiv">Home</a>
         <a href="#contact">My Favorites</a>
      </div>
        )
    }

}