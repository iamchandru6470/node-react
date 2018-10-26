import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  style = {
    color: 'white',
    background: '#5858d8',
    width: '100px',
    height: '50px',
    fontSize: '15px'    
  }
  state = {
    title : 'Welcome to React'
  }

  async getPosts() {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(posts)
    const random = Math.floor(Math.random() * 100);
    const post = await axios.get("https://jsonplaceholder.typicode.com/posts/" + random);
    console.log(post);
    this.setState({
      title : post.data.title
    })
    // Promise.all([axios.get("https://jsonplaceholder.typicode.com/posts"), axios.get("https://jsonplaceholder.typicode.com/posts/1")]).then(values=> {
    //   console.log(values);
    // })
  }
  clickMe() {
    this.getPosts()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <button style={this.style} onClick={this.clickMe.bind(this)}> Click me </button>
        </p>
      </div>
    );
  }
}

export default App;
