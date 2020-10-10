import React, { Component } from 'react';
import fire from '../config/fire';
import Form from './Form';
import Home from '../Navigation/Home';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.authlistener();
  }

  authlistener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
      else {
        this.setState({ user: null })
      }
    })
  }
  render() {
    return (
      <div className="Main">
        {this.state.user ? (<Home />) : (<Form />)}
      </div>
    );
  }
}

export default Main;