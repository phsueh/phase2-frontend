import React from 'react'
import { Form } from 'semantic-ui-react'

class PostForm extends React.Component {
  
  state = {
    name: "",
    post: "",
    url: ""
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
      post: this.state.post,
      url: this.state.url
      }
    }
    
    fetch("http://localhost:3000/jives", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(formattedObj)
    })
      .then(res => res.json())
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

    return (
      <div>
        <h3>Add a Jive!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={this.state.name}/>
            <Form.Input fluid label="Post" placeholder="Post" name="post" onChange={this.handleChange} value={this.state.post} />
            <Form.Input fluid label="URL" placeholder="url" name="url" onChange={this.handleChange} value={this.state.url} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PostForm