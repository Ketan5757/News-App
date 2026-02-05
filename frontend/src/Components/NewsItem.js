import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description} = this.props;
    return (
      <div>
        <div className="card" style= {{width: "18rem"}}>
        <img src="https://images.bild.de/6982ea58e2529c3c38c298ca/3c72057c7a3b05b9c6b2fb619d2736f0,cc1f8317?w=1280" className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
         <p className="card-text">{description}</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
    )
  }
}

export default NewsItem
