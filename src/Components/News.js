import React, { Component } from 'react'
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
    country: 'us',
    pagesize:8,
    category:'general'
  }
    static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  
      constructor() {
      super();
      console.log("hello i am constructor from news component")
      this.state ={  articles:[],
        loading:true,
        page:1
      }
    }
    async componentDidMount(){
      console.log("cdm");
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=1&pagesize=${this.props.pagesize}`;
      let data= await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
      this.setState({articles:parsedata.articles, 
        totalResults:parsedata.totalResults,
         loading:false})
  
    }

     handleprevclick=async ()=>{
       console.log("previous")
       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=businesscategory=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
       this.setState({loading:true});
      let data= await fetch(url);
      let parsedata= await data.json();
      console.log(parsedata);
   
   this.setState({
   page:this.state.page-1,
   articles:parsedata.articles,
      loading:false
   })
    }



    handlenextclick=async ()=>{
    console.log("next")
    if (!(this.state.page+1 > Math.ceil((this.state.totalResults/this.props.pagesize))) ) {
     
           let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=businesscategory=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
           this.setState({loading:true});
          let data= await fetch(url);
          let parsedata= await data.json();
          
      
    this.setState({
      page:this.state.page+1,
      articles:parsedata.articles,
      loading:false
    })
    }
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin: '35px,10px'}}>News-Top Headline</h1>
        {this.state.loading&&<Spinner/>}
        <div className="row">
       {!this.state.loading&& this.state.articles.map((element)=> {
        return <div className="col-md-4" key={element.url}>
        <Newsitems  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage?element.urlToImage:"https://fortune.com/img-assets/wp-content/uploads/2025/11/GettyImages-2213490750-e1763849852801.jpg?resize=1200,600"} newsurl={element.url} />
        </div>
       })} 
      </div>
<div className="container d-flex justify-content-between">
  <button disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handleprevclick}>&larr; previous</button>
  <button disabled={this.state.page+1 > Math.ceil((this.state.totalResults/this.props.pagesize)) } className="btn btn-primary"onClick={this.handlenextclick}>Next &rarr;</button>
</div>

      </div>
    )
  }
}

export default News
