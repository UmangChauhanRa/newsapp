import React , { Component } from 'react'

class NewsItem extends Component{
  

   render()
   { 
   return(
        <>
          <div className="card card-height" >
            <span class="badge text-bg-info text-light" style={{width : "100%"}}> {this.props.source} </span> 
            <img src={ this.props.imageurl===null?"https://cdn.wionews.com/sites/default/files/2023/07/25/369310-nasa.jpg":this.props.imageurl } className="card-img-top" alt="..."/>
             <div className="card-body">
               <h5 className="card-title"> { this.props.title===null?"Null" : this.props.title.slice(0,45) }.. </h5>
                 <p className="card-text"> { this.props.description===null?"Null" : this.props.description.slice(0,40) }.. </p>
                 <p> <small className="text-muted"> By - {this.props.author===null?"Unknown" : this.props.author } and updated { new Date(this.props.date).toDateString() }  </small> </p> 
                 <a href={this.props.url===null?"/":this.props.url} rel="noreferrer" target="_blank" className="btn btn-primary"> Read More </a>
             </div> 
          </div>
   
        </>
     )
   }
}

export default NewsItem
