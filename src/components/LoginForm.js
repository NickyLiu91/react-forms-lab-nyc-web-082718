import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={event => this.handleNameChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
            value={this.state.passwordname}
            onChange={event => this.handlePasswordChange(event)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
