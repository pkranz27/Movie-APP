import React, {Component, useState} from'react'
import '../style.css/Movie.css'
import  persona from'../imgs/persona.jpg'

function Watched(props){
  useState(props.hasWatched)
}

class Movie extends Component{
    constructor(props){
        super(props);
        this.hasWatchedTitle =React.createRef();
  
    }

   
    
    render(){
      let hasWatchedTitle;
      if(this.props.hasWatched == false){
        hasWatchedTitle =<button type="button" className="btn btn-info" data-toggle="button" onClick={this.props.handleHasWatched.bind(this)}>Have you watched this?</button> 

      }else{
        hasWatchedTitle =<button type="button" className="btn btn-info" data-toggle="button" onClick={this.props.handleHasWatched.bind(this)}>You have watched this</button>
      }
        return(
          <div className="card card-image">
          <div className="text-black text-center rgba-stylish-strong py-5 px-4">
            <div className="py-5">
              <div>
                 <span className='backgroundImage'> {this.props.background}</span>
                         {hasWatchedTitle}
                   
                  <h5 className="h5 orange-text">{this.props.title}</h5>
                  <p className="mb-4 pb-2 px-md-5 mx-md-5">{this.props.body}</p>
              </div>
            </div>
          </div>
        </div>
        )
        }
    }

export default Movie;

