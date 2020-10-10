// https://www.hatchways.io/api/assessment/students

import React, { Component } from 'react';
import Logged from '../LoginPage/Logged';

class Albums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        };

        this.state = {
            show: false
        }
    }

    componentDidMount() {
        fetch('https://www.hatchways.io/api/assessment/students')
            .then(res => res.json())
            .then(({ students }) => {
                this.setState({
                    isLoaded: true,
                    items: students,
                })
            });
    }

    handleClick = () => {
        this.setState({
            show: !this.state.show
        });
    };

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>loading data...</div>
        }

        else {

            return (
                <div>
                    <div className="albums">
                        <h1 style={{ color: "whitesmoke", fontFamily: 'Joti One' }}>Wanna see some cool images??? Smash the button then !!!</h1>
                        <button onClick={this.handleClick} className="button1">Album</button>
                        {items.map(item => (
                            <h2 key={item.id}>
                                {this.state.show && <img style={{ width: "100px", marginLeft: "40%" }} src={item.pic} />}
                            </h2>
                        ))}
                        <Logged />
                    </div>
                </div>

            );
        }

    }

}

export default Albums;

