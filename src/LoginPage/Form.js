import React, { Component } from "react";
import fire from "../config/fire";

class Form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: "",
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="backgroundpic">
        <form>
          <br />
          <br />
          <input
            className="form"
            type="text"
            name="email"
            placeholder="Enter your email"
            size="50"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />
          <br />
          <input
            className="form"
            type="password"
            name="password"
            placeholder="Enter your pssword"
            size="50"
            onChange={this.handleChange}
            value={this.state.password}
          />
        </form>
        <br />
        <br />
        {/* <button onClick={this.handleClick} className="button2">log in</button> */}
        <button onClick={this.login} className="button2">
          log in
        </button>
        <button
          onClick={this.signup}
          className="button2"
          style={{ marginLeft: "40px" }}
        >
          sign up
        </button>
      </div>
    );
  }
}

export default Form;
