import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  news = "Latest News"
  render() {
    return (
      <div>
        Hi and Welcome to News App, here you can view {this.news} 
      </div>
    )
  }
}



