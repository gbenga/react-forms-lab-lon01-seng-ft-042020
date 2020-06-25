import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let formData = {
      username: this.state.username,
      password: this.state.password,
    };

    this.state.username && this.state.password
      ? this.props.handleLogin(formData)
      : null;
  };
  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleUsernameChange(event)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={(event) => this.handlePasswordChange(event)}
            />
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
