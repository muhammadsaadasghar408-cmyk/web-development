import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  static defaultProps = {
    country: "us",
    pagesize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };
 capitalizeFirstLetter =(string)=>{
  return string.charAt(0).toUpperCase()+string.slice(1);

}
  constructor(props) {
    super(props);
    
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults:0
    };
    document.title= `${this.capitalizeFirstLetter(this.props.category)}- NewsHub`;

  }
async updateNews(pageNo){
  this.props.setProgress(10);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page}&pagesize=${this.props.pagesize}`;
  this.setState({loading:true})
  this.props.setProgress(30);
  let data = await fetch(url);
  let parsedata = await data.json();
  this.props.setProgress(70);
  console.log(parsedata);
  
  this.setState({
    articles: parsedata.articles ,
    totalResults: parsedata.totalResults ,
    loading: false,
    
  });
  this.props.setProgress(100);
}
  async componentDidMount() {
    this.updateNews()
    } 
   
  handleprevclick = async () => {
    this.updateNews(this.state.page - 1);
    this.setState({ page: this.state.page - 1 });
  };

  handlenextclick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pagesize)
      )
    ) {
      this.updateNews(this.state.page + 1);
      this.setState({ page: this.state.page + 1 });
    }
  };
  
    fetchMoreData = async () => {
     this.setState({ page: this.state.page + 1 });
       const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page}&pagesize=${this.props.pagesize}`;
     
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      
      this.setState({
        articles: this.state.articles.concat(parsedata.articles) ,
        totalResults: parsedata.totalResults ,
        loading: false,
        
      });
    
  
  };

  render() {
    const { articles, loading, error } = this.state;
    console.log("render");

    return (
      <>
        <h1 className="text-center" style={{ margin: "35px 10px" }}>
          News - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines
        </h1>
        {loading && <Spinner />}

         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row">
           { this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageurl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://fortune.com/img-assets/wp-content/uploads/2025/11/GettyImages-2213490750-e1763849852801.jpg?resize=1200,600"
                    }
                    newsurl={element.url}
                    author={element.author ? "Unknown" : element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          {!loading && (!articles || articles.length === 0) && !error && (
            <p className="text-center">No news available.</p>
          )}
          </div>
        </div>
          </InfiniteScroll>
       
      </>
    );
  }
}

export default News;
