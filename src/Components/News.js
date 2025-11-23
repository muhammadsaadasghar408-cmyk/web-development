import React, { Component } from 'react'
import Newsitems from './Newsitems'

export class News extends Component {
  
      constructor() {
      super();
      console.log("hello i am constructor from news component")
      this.state ={  articles:[],
        loading:false,
        page:1
      }
    }
    async componentDidMount(){
      console.log("cdm");
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8853cbd503014bacbcb2d732e7a43ebc&page=1";
      let data= await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
      this.setState({articles:parsedata.articles})

    }
  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>News-Top Headline</h1>
        <div className="row">
       { this.state.articles.map((element)=> {
        return <div className="col-md-4" key={element.url}>
        <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage} newsurl={element.url} />
        </div>
       })} 
      </div>
<div className="container mx-3">
  <button className="btn btn-primary">previous</button>
  <button className="btn btn-primary">Next</button>
</div>

      </div>
    )
  }
}

export default News
