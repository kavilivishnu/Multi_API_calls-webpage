import React, { Component } from 'react';
import Parallax from 'react-rellax';

export class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoading: false,
        }

        this.state = {
           on: false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(res => res.json())
          .then(json => {
            this.setState({
                isLoading: true,
                items: json,
            })
        });
    }
    
    handleClick = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render() {
       var {isLoading, items} = this.state
       if(!isLoading) {
        return <div>Loading...</div>
       }
       else {
            return (
                <div className="posts">
                    <h1 style={{fontFamily: 'El Messiri'}}>Feeling bored? You'll no more be!</h1>
                    <h2 style={{fontFamily: 'El Messiri'}}>Click the button on right to read some funny posts of people!!</h2>
                    <h2 style={{fontFamily: 'El Messiri'}}>Beware you're going to laugh out loud! and scare people!!!</h2>
                    <br />
                    <Parallax speed={ -8 }>
                        <button style={{fontFamily:'Bungee Inline'}} className="button4" onClick={this.handleClick}>Show/Hide</button>
                    </Parallax>
                    {items.map(item => (
                        <h3 style={{fontFamily:'Istok Web'}}><li style={{listStyle: "none"}}key={item.id}>
                            {this.state.on &&
                            <div>
                                <br />
                                <br />
                                Name: {item.name}
                                <br />
                                Email: {item.email}
                                <br /> 
                                Description: {item.body}
                            </div> }    
                        </li></h3>
                    ))}
                    {/* <Parallax speed={ 30 }>
                        <button className="button4" onClick={this.handleClick}>Show/Hide</button>
                    </Parallax> */}
                </div>
            );
        }
    }
}

export default Posts;