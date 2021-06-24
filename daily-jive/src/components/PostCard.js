import React, { Component } from 'react'
import { Card, Button, Form } from 'semantic-ui-react'
import { Popup } from 'reactjs-popup';
import '../index.css'
import 'reactjs-popup/dist/index.css';


export default class PostCard extends Component {

    state = {
        name: this.props.usersInfoObj.name, 
        type: this.props.usersInfoObj.type,
        post: this.props.usersInfoObj.post, 
        pics: this.props.usersInfoObj.pics,
        url: this.props.usersInfoObj.url,
        likes: this.props.usersInfoObj.likes, 
        dislikes: this.props.usersInfoObj.dislikes,
        favorite: false
    }

    handleLike = () => {
        let currentLikes = this.state.likes

        fetch(`http://localhost:9393/jives/${this.props.usersInfoObj.id}`, {
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

        fetch(`http://localhost:9393/jives/${this.props.usersInfoObj.id}`, {
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

        fetch(`http://localhost:9393/jives/${this.props.usersInfoObj.id}`, {
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

    handleDelete = () => {
        fetch(`http://localhost:9393/jives/${this.props.usersInfoObj.id}`, {
            method: "DELETE",
            })
            .then((r) => r.json())
            .then(() => {
                this.props.delete()
                console.log("Deleted")
            });
    }

    handleEdit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    postEdit = () => {

        fetch(`http://localhost:9393/jives/${this.props.usersInfoObj.id}`, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            type: this.state.type ,
            post: this.state.post,
            pics: this.state.pics ,
            url: this.state.url,
            })
        })
        .then(res => res.json())
        .then((updatedPost) => {
            this.setState({
            name: "",
            type: "",
            post: "",
            pics: "", 
            url: "",
            })
            {this.props.edit()}
        })
    }

    render() {
        // console.log(this.props)  
        return (
            <Card>
                <h1 className= "cardtitle" >{this.props.usersInfoObj.name}</h1>
                <img className= "cardIMG"src={this.props.usersInfoObj.pics ? this.props.usersInfoObj.pics : 'https://kubalubra.is/wp-content/uploads/2017/11/default-thumbnail.jpg' } />
                <p className= "cardPost">{this.props.usersInfoObj.post}  </p>
                <a  className= "cardlink"href={this.props.usersInfoObj.url}>Find out more here: {this.props.usersInfoObj.url}</a>
                <br></br>
                <Button.Group>
                    <Button style={{padding: 10, margin: 5}} attached="bottom" size="large" onClick={this.handleLike}><span className= "cardLikeButton" >👍 {this.state.likes}</span></Button>
                    <Button style={{padding: 10, margin: 5}} attached="bottom" onClick={this.handleDislike}><span className= "cardDislikeButton">👎 {this.state.dislikes}</span></Button>
                    <Button style={{padding: 10, margin: 5}} attached="bottom" onClick={this.handleFavorite}><span className= "cardFavoriteButton">{this.state.favorite ? '🙉' : '🙈'}</span></Button>
                    <Button style={{padding: 10, margin: 5}} attached="bottom" onClick={this.handleDelete}><span className= "cardDeleteButton">❌</span></Button>
                </Button.Group>
                <Popup trigger={<button style={{padding: 10, margin: 5}}><span className= "cardEditButton">✏️ Edit Post</span></button>} modal>
                        <div>
                            <Form style={{padding: 10, margin: 5}}onSubmit={this.postEdit}>
                            <Form.Group style={{padding: 5}} widths="equal" >
                                <Form.Input fluid label="Title" placeholder="Title" name="name" onChange={this.handleEdit} value={this.state.name} />
                                <Form.Input fluid label="Picture" placeholder="Picture URL" name="pics" onChange={this.handleEdit} value={this.state.pics} />
                                <Form.Input fluid label="Website" placeholder="Website URL" name="url" onChange={this.handleEdit} value={this.state.url} />
                                <Form.Input control="select" fluid label="Type" placeholder="Type" name="type" onChange={this.handleEdit} value={this.state.type}>
                                    <option value="Sports">Sports</option>
                                    <option value="News">News</option>
                                    <option value="Gaming">Gaming</option>
                                    <option value="Movies">Movies</option>  
                                    <option value="Coding">Coding</option>
                                    <option value="Animals">Animals</option>
                                </Form.Input>
                            </Form.Group>
                            <Form.Group style={{padding: 5}} widths= "equal">
                                <Form.Input fluid label="Post" placeholder="Post" name="post" onChange={this.handleEdit} value={this.state.post} />
                            </Form.Group>
                            <Form.Button style={{flex: 1, marginBottom: 5, marginLeft: 5 }}>Submit Edit</Form.Button>
                            </Form>
                        </div>
                </Popup>
            </Card>
            
        )
    }
}