import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class PostForm extends React.Component {
  
  state = {
    name: "",
    type: "",
    post: "",
    pics: "", 
    url: "",
    likes: "",
    dislikes: "",
    user_id: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let formattedObj = {
      name: this.state.name,
      type: this.state.type,
      post: this.state.post,
      pics: this.state.pics,
      url: this.state.url,
      likes: this.state.likes,
      dislikes: this.state.dislikes,
      user_id: this.state.user_id
    }
    
    fetch("http://localhost:9393/jives", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formattedObj)
    })
      .then(res => res.json())
      .then(newlyCreatedPost => {
        this.props.addPostToEndOfState(newlyCreatedPost)
        this.setState({
          name: "",
          post_type: "",
          post: "",
          pics: "", 
          url: "",
          likes: "",
          dislikes: "",
          user_id: 1
        })
      })
  }

  
  render() {
    // console.log(this.state)
    return (
      <div>
        <h1 style={{padding: 10, color: 'black'}}>Add a Jive! </h1>
        <Form size={'massive'} onSubmit={this.handleSubmit}>
          <Form.Group style={{padding: 10}} widths="equal" >
            <Form.Input fluid label="Title" placeholder="Title" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="Picture" placeholder="Picture URL" name="pics" onChange={this.handleChange} value={this.state.pics} />
            <Form.Input fluid label="Website" placeholder="Website URL" name="url" onChange={this.handleChange} value={this.state.url} />
            <Form.Input control="select" fluid label="Type" placeholder="Type" name="type" onChange={this.handleChange} value={this.state.type}>
              <option value="Sports">Sports</option>
              <option value="News">News</option>
              <option value="Gaming">Gaming</option>
              <option value="Movies">Movies</option>
              <option value="TV Shows">TV Shows</option>  
              <option value="Coding">Coding</option>
              <option value="Animals">Animals</option>
            </Form.Input>
          </Form.Group>
          <Form.Group style={{padding: 10}} widths= "equal">
            <Form.Input control={TextArea} fluid label="Post" placeholder="Post" name="post" onChange={this.handleChange} value={this.state.post} />
          </Form.Group>
          <Form.Button style={{flex: 1, marginBottom: 10, marginLeft: 10 }}>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PostForm