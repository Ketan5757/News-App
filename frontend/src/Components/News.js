import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <>    
        <div className="container my-4">
          <h1>AlleNews - An Entry Point to view latest News</h1>
          <div className="row">
            <div className="col-md-4">
            <NewsItem title = "News 1" description = "description1"/>
            </div>
            <div className="col-md-4">
            <NewsItem title = "News 2" description = "description2"/>
            </div>
            <div className="col-md-4">
            <NewsItem title = "News 3" description = "description3"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 4" description = "description4"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 5" description = "description5"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 6" description = "description6"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 7" description = "description7"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 8" description = "description8"/>
            </div>
            <div className="col-md-4 my-4">
            <NewsItem title = "News 9" description = "description9"/>
            </div>

          </div>
      </div>
      </>
    )
  }
}

export default News
