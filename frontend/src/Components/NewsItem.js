import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsurl, publishedAt, author} = this.props;
    return (
      <div>
        <div className="card" style= {{width: "18rem"}}>
        <img src={!imageurl ? "https://as2.ftcdn.net/v2/jpg/02/12/50/11/1000_F_212501134_9byDWDYbOIrxY0vE1iCTF4ZztasKlwek.jpg" : imageurl} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{title}...</h5>
         <p className="card-text">{description}...</p>
         <h6 className='card-author'>by Author - {author}</h6>
         <h6 className='card-date'>{new Date(publishedAt).toGMTString()}</h6>
        <a href= {newsurl} className="btn btn-sm btn-primary">Explore more</a>
      </div>
    </div>
  </div>
    )
  }
}

export default NewsItem
