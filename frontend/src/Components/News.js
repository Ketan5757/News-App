import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        This is news component
        <NewsItem title = "News 1" description = "description1"/>
        <NewsItem title = "News 2" description = "description2"/>
        <NewsItem title = "News 3" description = "description3"/>
        <NewsItem title = "News 4" description = "description4"/>
        <NewsItem title = "News 4" description = "description4"/>
        <NewsItem title = "News 5" description = "description5"/>
      </div>
    )
  }
}

export default News
