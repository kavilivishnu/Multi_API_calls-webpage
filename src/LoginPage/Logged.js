import React, { Component } from 'react';
import fire from '../config/fire';

class Logged extends Component {

    logout(){
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <button className="button2" onClick={this.handleClick}>logout</button>
            </div>
        );
    }
}

export default Logged;
