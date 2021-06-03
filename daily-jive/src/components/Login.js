import React from "react"

class Login extends React.Component {

state = {
email: "",
password: ""
}


handleChange = (e) => {
  const {name,vaule} = e.target
  this.setState({[name]:vaule})
}


handleSubmit = (e) => {
  e.preventDefault()
}
   

   render(){



    return(
        <div className="login">
            <form onSubmit = {this.handleSubmit}>
                <input type='email' name='email' placeholder='email ...' required onChange = {this.handleSubmit}/>
                <input type='password' name='password' placeholder='password ...' required onChange = {this.handleSubmit}/>
                <button onSubmit= {this.handleSubmit}>Log In</button>
            </form>
        </div>
    )

    }
}

export default Login