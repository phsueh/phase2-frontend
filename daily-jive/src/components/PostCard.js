import React, { Component } from 'react'

export default class PostCard extends Component {
    render() {
        // console.log(this.props)
        return (
            <div className="post_card">
                <h1>{this.props.usersInfoObj.name}</h1>
                <img src={this.props.usersInfoObj.pics} />
                <p> {this.props.usersInfoObj.post} </p>
                <a href={this.props.usersInfoObj.url}>Find out more here: {this.props.usersInfoObj.url}</a>
                <br></br>
                <button className="like-btn" >👍 {this.props.usersInfoObj.likes}</button>
                <button className="dislike-btn">👎 {this.props.usersInfoObj.dislikes}</button>
                <button className="fav-btn">🙈</button>
            </div>

        )
    }
}
