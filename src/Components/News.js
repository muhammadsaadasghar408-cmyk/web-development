import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h1>News-Top Headline</h1>
        <div className="row">
        <div className="col-md-4">
        <Newsitems title="myTitle" discription="my description" />
        </div>
        <div className="col-md-4">
        <Newsitems title="myTitle" discription="my description" />
        </div>
       <div className="col-md-4">
        <Newsitems title="myTitle" discription="my description" />
        </div>
      </div>
      </div>
    )
  }
}

export default News
