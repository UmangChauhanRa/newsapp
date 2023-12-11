import { Component } from 'react'
import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';
import { findByLabelText } from '@testing-library/react';
class News extends Component {
     article =  [
        {
          "source": {
            "id": "techcrunch",
            "name": "TechCrunch"
          },
          "author": "Harri Weber",
          "title": "Goldman may be trying to bail on Apple Card",
          "description": "Four years after partnering with Apple on the launch of the Apple Card, Goldman Sachs is reportedly eyeing the exits.",
          "url": "https://techcrunch.com/2023/06/30/goldman-may-be-trying-to-bail-on-apple-card/",
          "urlToImage": "https://techcrunch.com/wp-content/uploads/2019/08/Screen-Shot-2019-03-25-at-1.37.32-PM.png?w=1119",
          "publishedAt": "2023-07-01T01:05:59Z",
          "content": "Four years after partnering with Apple on the launch of the Apple Card, Goldman Sachs may be eyeing the exits.\r\nThe Wall Street Journal reports that Goldman is “looking for a way out” of its high-pro… [+884 chars]"
        }
      ]

      
    constructor()
    {  
        super();
        this.state = {
            article : this.article ,
            totalresults : 0,
            page : 1
        }
        
        console.log("constructor");
    } 
    
    async componentDidMount()
    {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf764bb9e4ea484f9509f1d9046cbb1a&page=1&pageSize=${this.props.pageSize}`;
      let Data = await fetch(url); 
      let ParsedData = await Data.json();
      console.log( ParsedData );
      this.setState( { article : ParsedData.articles , totalresults : ParsedData.totalResults , page : 1} );
      //console.log("componentDidMount");
      document.title = `ExpressNews - ${this.props.Category} Top Headline`;
    }
    handleprevclick = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf764bb9e4ea484f9509f1d9046cbb1a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
      let Data = await fetch(url); 
      let ParsedData = await Data.json();
      console.log( ParsedData );
      this.setState( {article : ParsedData.articles , totalresults : ParsedData.totalResults , page : this.state.page -  1} );
      
    } 
    
    handlenextclick = async ()=>{
     
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf764bb9e4ea484f9509f1d9046cbb1a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
      let Data = await fetch(url); 
      let ParsedData = await Data.json();
      console.log( ParsedData );
      this.setState( {article : ParsedData.articles , totalresults : ParsedData.totalResults , page : this.state.page + 1} );
      console.log("next");
      console.log(this.state.page);
    }
    fetchMoreData = async () => {
          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf764bb9e4ea484f9509f1d9046cbb1a&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
          let Data = await fetch(url); 
          let ParsedData = await Data.json();
          console.log( ParsedData );
          this.setState( {article : this.state.article.concat(ParsedData.articles) , totalresults : ParsedData.totalResults , page : this.state.page + 1} );
          console.log("next");
          console.log(this.state.page);
    }
    render(){
    return (
      <>
              <div className="container main"> 
              <h3 className="text-center-heading"> Express News - { `${this.props.Category}` } Top-Headlines </h3>
               <div className="row mb-4"> 
               {
                  this.state.article.map((element)=>{
                      return (
                                  <div className="col-md-3">
                                      <NewsItem key={element.url} title={element.title} description={element.description} imageurl={element.urlToImage} url={element.url} author={element.author} date={ element.publishedAt} source={ element.source.name } />
                                  </div>     
                             )   
                  })
               }
               </div>
               <InfiniteScroll dataLength={this.state.article.length} next={ this.fetchMoreData } hasMore={this.state.article.length !== this.state.totalresults}
                         loader={ <div className="d-flex justify-content-center margin-spinner"> 
                                       <div class="spinner-grow text-light" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                  </div>
                                   
                                  </div> 
                                  
                                } >
               </InfiniteScroll>
              </div> 
      </>
    )
  }
}
export default News