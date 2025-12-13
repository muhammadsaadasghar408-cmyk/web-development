import React, { Component } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

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

  constructor() {
    super();
    
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }
async updateNews(pageNo){
   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${this.state.page}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      
      this.setState({
        articles: parsedata.articles ,
        totalResults: parsedata.totalResults ,
        loading: false,
        
      });
}
  async componentDidMount() {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8853cbd503014bacbcb2d732e7a43ebc&page=${page}&pagesize=${this.props.pagesize}`;
      this.setState({ loading: true });
     
      let data = await fetch(url);
      let parsedata = await data.json();
      console.log(parsedata);
      
      this.setState({
        articles: parsedata.articles ,
        totalResults: parsedata.totalResults ,
        loading: false,
        
      });
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

  render() {
    const { articles, loading, error } = this.state;
    console.log("render");

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 10px" }}>
          News - Top Headlines
        </h1>
        {loading && <Spinner />}
        {error && <p className="text-danger text-center">{error}</p>}
        <div className="row">
          {!loading &&
            articles &&
            articles.length > 0 &&
            articles.map((element) => {
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
                    author={author ? "Unknown" : element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          {!loading && (!articles || articles.length === 0) && !error && (
            <p className="text-center">No news available.</p>
          )}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            className="btn btn-primary"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
