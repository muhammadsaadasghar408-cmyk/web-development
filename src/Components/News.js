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
      this.setState({articles:parsedata.articles, totalResults:parsedata.totalResults})
  
    }

     handleprevclick=async ()=>{
       console.log("previous")
       let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page-1}&pagesize=20`;
      let data= await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
   
   this.setState({
   page:this.state.page-1,
   articles:parsedata.articles
   })
    }

i

    handlenextclick=async ()=>{
    console.log("next")
    if (this.state.page+1 > Math.ceil((this.state.totalResults/20)) ) {
      
    }
    else{
    
           let url=`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page+1}&pagesize=20`;
          let data= await fetch(url);
          let parsedata= await data.json();
          console.log(parsedata);
      
    this.setState({
      page:this.state.page+1,
      articles:parsedata.articles
    })
    }
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1>News-Top Headline</h1>
        <div className="row">
       { this.state.articles.map((element)=> {
        return <div className="col-md-4" key={element.url}>
        <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage?element.urlToImage:"https://fortune.com/img-assets/wp-content/uploads/2025/11/GettyImages-2213490750-e1763849852801.jpg?resize=1200,600"} newsurl={element.url} />
        </div>
       })} 
      </div>
<div className="container d-flex justify-content-between">
  <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handleprevclick}>&larr; previous</button>
  <button disabled={this.state.page > Math.ceil((this.state.totalResults/20)) } className="btn btn-primary"onClick={this.handlenextclick}>Next &rarr;</button>
</div>

      </div>
    )
  }
}

export default News
