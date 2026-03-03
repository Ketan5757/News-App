import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import Spinner from './Spinner';
import PropTypes from 'prop-types'



export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 5,
    category: 'general',
  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    console.log("This is a constructor");
    this.state ={
      articles: [],
      loading: false
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - AlleNews`;
  }

  async componentDidMount(){
    console.log("This is componentDidMount");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.props.pageSize}&apiKey=cc1ee18d046a42569793bbb275a6cefe`
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({articles: parseddata.articles})
  }


  render() {
    return (
      <>    
        <div className="container my-4">
          <h1><center>AlleNews - Top Headlines on {this.capitalizeFirstLetter(this.props.category)} </center></h1><br/>
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4 mb-4" key = {element.url}>
            <NewsItem  title = {element.title ? element.title.slice(0,40): " "} description = {element.description ? element.description.slice(0,88): " "} imageurl = {element.urlToImage ? element.urlToImage : ""} newsurl={element.url} publishedAt={element.publishedAt.slice(0,10)} author={element.author}/>
            </div>
            })} 
            </div>
      </div>
      </>
    )
  }
}

export default News
