import React from 'react'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  
  state = {
    name: "",
<<<<<<< HEAD
    type: "",
    post: "", 
    url: "",
    likes: "",
    dislikes: "",
    favorite: ""
=======
    post: "",
    url: ""
>>>>>>> dbde6f17f31e5584db7079bf735f2b50b328c92d
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
<<<<<<< HEAD
      type: this.state.type,
      post: this.state.post,
      url: this.state.url,
      likes: this.state.likes,
      dislikes: this.state.dislikes,
      favorite: this.state.favorite,
=======
      post: this.state.post,
      url: this.state.url
      }
>>>>>>> dbde6f17f31e5584db7079bf735f2b50b328c92d
    }
    
    fetch("http://localhost:3000/jives", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formattedObj)
    })
      .then(res => res.json())
<<<<<<< HEAD
      .then(newlyCreatedPost => {
        this.props.addPostToEndOfState(newlyCreatedPost)
        this.setState({
          name: "",
          type: "",
          post: "",
          url: "",
          likes: "",
          dislikes: "",
          favorite: false
        })
      })
  }

  render() {
    console.log(this.state)
=======
      .then(newlyCreatedJive => {
        this.props.addJiveToEndOfState(newlyCreatedJive)
        this.setState({
          name: "",
          post: "",
          url: ""
        })
      })


  }


  render() {
>>>>>>> dbde6f17f31e5584db7079bf735f2b50b328c92d

    return (
      <div>
        <h3>Add a Jive!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
<<<<<<< HEAD
            <Form.Input fluid label="Type" placeholder="Type" name="type" onChange={this.handleChange} value={this.state.type} />
            <Form.Input fluid label="Post" placeholder="Post" name="post" onChange={this.handleChange} value={this.state.post} />
            <Form.Input fluid label="Picture" placeholder="Picture URL" name="pics" onChange={this.handleChange} value={this.state.pics} />
            <Form.Input fluid label="Website" placeholder="Website URL" name="url" onChange={this.handleChange} value={this.state.url} />
=======
            <Form.Input fluid label="Post" placeholder="Post" name="post" onChange={this.handleChange} value={this.state.post} />
            <Form.Input fluid label="URL" placeholder="url" name="url" onChange={this.handleChange} value={this.state.url} />
>>>>>>> dbde6f17f31e5584db7079bf735f2b50b328c92d
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PostForm