import { Component } from "react";
import React from "react";
import "../style.css/container.css"
import Movie from './Movie'
import persona  from '../imgs/persona.jpg';
import midnight_cowboy from "../imgs/midnight_cowboy.jpeg"
import { ReactDOM } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "reac-router-dom"

class Menu extends React.Component{
    render(){
        return(
            <div>
                <h1>Movie menu</h1>
                <div>List of new movies</div>
                <ul>
                    <Link to="/my-app/src/components/Container.js">Movie app</Link>
                    <Link to="/"> Some  movie #2</Link>
                    <li>Stupid link # 4</li>
                </ul>
            </div>
        )
    }
}

class MyRoutes extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<hr />
					<Routes>
						<Route path='/' element={<Menu/>}></Route>
						<Route path='/Contianer.js' element={<Container/>}/>
					</Routes>
				</div>
			</Router>
		)
	}
}

class Container extends Component{
    constructor(props){
        super(props);
        this.id=0
        this.state={
            currentItem:0,
            currentMovie:[{
                id:'',
                title:'',
                hasWatched:false,
                body:'',
                background:<img src='' atl='image' height='' width='' />
            }],
            movies:[
                
                {
                    movieId:0,
                    hasWatched:false,
                    title:"Persona",
                    body:"Persona is a 1966 Swedish psychological drama film,[n 1] written and directed by Ingmar Bergman and starring Bibi Andersson and Liv Ullmann."
                   +" The story revolves around a young nurse named Alma (Andersson) and her patient, well-known stage actress Elisabet Vogler (Ullmann), who has suddenly stopped speaking. They move to a cottage, where Alma cares for Elisabet,"+
                   " confides in her and begins having trouble distinguishing herself from her patient. ",
                    background:<img src={persona} alt="Persona" height="500" width="400"/>
    
                },
                {
                   movieId:1,
                   hasWatched:false,
                    title:"Midnight Cowboy",
                    body:"Midnight Cowboy is a 1969 American buddy drama film, based on the 1965 novel of the same name by James Leo Herlihy. The film was written by Waldo Salt, directed by John Schlesinger,"+
                    " and stars Dustin Hoffman and Jon Voight, with notable smaller roles being filled by Sylvia Miles, John McGiver, Brenda Vaccaro, Bob Balaban, Jennifer Salt, and Barnard Hughes. Set in New York City,"+
                    " Midnight Cowboy depicts the unlikely friendship between two hustlers: naïve sex worker Joe Buck (Voight), and ailing con man Enrico \"Ratso\" Rizzo (Hoffman).",
                    background:<img src={midnight_cowboy} alt="Midnight Cowboy" height="500" width="400"/>
                }
            ]
           
        }
        
       
    }
    
    
    nextMovie(){
        let index = this.state.currentItem
       let movieIndex= this.state.movies[index]
       if(movieIndex[index] === movieIndex[0] && index ===  0){
           index++;
            this.setState({
              currentMovie:this.state.movies[index],
              currentItem:index
           })
           this.state.currentMovie.push(movieIndex[index])
           console.log(this.state.currentMovie[index])
       }else{
            this.setState({
                currentMovie:this.state.movies[this.state.currentItem]
            })
           return console.log(this.state.currentMovie)
       }
    }
        
     prevMovie(){
        let index = this.state.currentItem
        let movieIndex = this.state.currentMovie[index]
       if(index === this.state.currentMovie.length){
           this.setState({
            currentMovie:this.state.movies[index]
           })
           this.state.currentMovie.push(movieIndex[index])
       }
       else{
           index--
           this.setState({
               currentMovie:this.state.movies[0]
           })
       }
       
       return console.log(this.state.currentMovie);
    }
    handleHasWatched(){
        if( this.state.hasWatchedCount===0){
          console.log(this.props.movieId)
          this.setState({ 
            hasWatched:true
          })
        }
        else{
          this.setState({
            hasWatched:false
          })
        }
        
      }

    render(){
        
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <Movie title={this.state.currentMovie.title} body={this.state.currentMovie.body} background={this.state.currentMovie.background} />

                        <div className="btn">
                            <button className="btn btn-success add-button" onClick={this.nextMovie.bind(this)}> Next</button>
                            <button className="btn btn-success sub-button" onClick={this.prevMovie.bind(this)}> Previous</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Container