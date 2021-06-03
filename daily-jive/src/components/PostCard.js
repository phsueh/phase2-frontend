import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

export default class PostCard extends Component {

    state = {
        likes: this.props.usersInfoObj.likes, 
        dislikes: this.props.usersInfoObj.dislikes,
        favorite: false
    }

    handleLike = () => {
        let currentLikes = this.state.likes

        fetch(`http://localhost:3000/jives/${this.props.usersInfoObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                likes: currentLikes ++
            }),
            })
            .then((r) => r.json())
            .then((newPostLikes) => {
                this.setState({
                likes: newPostLikes.likes + 1
                })
            });
    }

    handleDislike = () => {
        let currentDislikes = this.state.dislikes 

        fetch(`http://localhost:3000/jives/${this.props.usersInfoObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dislikes: currentDislikes ++
            }),
            })
            .then((r) => r.json())
            .then((newPostDislikes) => {
                this.setState({
                dislikes: newPostDislikes.dislikes + 1
                })
            });
    }


    handleFavorite = () => {
        let newFavorite = !this.state.favorite

        fetch(`http://localhost:3000/jives/${this.props.usersInfoObj.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                favorite: newFavorite
            }),
            })
            .then((r) => r.json())
            .then(() => {
                this.setState({
                favorite: newFavorite
                })
            });
    }

    render() {
        console.log(this.props)
        return (
            <Card>
                <h1>{this.props.usersInfoObj.name}</h1>
                <img src={this.props.usersInfoObj.pics}  />
                <p>{this.props.usersInfoObj.post} </p>
                <a href={this.props.usersInfoObj.url}>Find out more here: {this.props.usersInfoObj.url}</a>
                <br></br>
                <Button.Group>
                    <Button attached="bottom" size="large" onClick={this.handleLike}>👍 {this.state.likes}</Button>
                    <Button attached="bottom" onClick={this.handleDislike}>👎 {this.state.dislikes}</Button>
                    <Button attached="bottom" onClick={this.handleFavorite}>{this.state.favorite ? '🙉' : '🙈'}</Button>
                </Button.Group>
                {/* <button className="like-btn" onClick={this.handleLike} >👍 {this.state.likes}</button>
                <button className="dislike-btn" onClick={this.handleDislike}>👎 {this.state.dislikes}</button>
                <button className="fav-btn" onClick={this.handleFavorite}>{this.state.favorite ? '🙉' : '🙈'}</button> */}
            </Card>
            
        )
    }
}