import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';



export class News extends Component {
  constructor(){
    super();
    console.log("This is a constructor");
    this.state ={
      articles: [],
      loading: false
    }
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cc1ee18d046a42569793bbb275a6cefe"
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
  }


  render() {
    return (
      <>    
        <div className="container my-4">
          <Spinner/>
          <h1><center>AlleNews - An Entry Point to view latest News</center></h1><br/>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 mb-4" key = {element.url}>
            <NewsItem  title = {element.title ? element.title.slice(0,40): " "} description = {element.description ? element.description.slice(0,88): " "} imageurl = {element.urlToImage ? element.urlToImage : ""} newsurl={element.url}/>
            </div>
            })} 
            </div>
      </div>
      </>
    )
  }
}

export default News
