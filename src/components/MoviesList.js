import React, { Component } from 'react';
import SingleCard from './SingleCard';

class MoviesList extends Component{
  constructor(props){
    super(props);
    this.state ={
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount(){
    fetch('http://starlord.hackerearth.com/movies')
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            items: data
          })
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error : error
          })
        }
      )
  }

  render(){
    const{error, isLoaded} = this.state;
    if (error){
      return <div>Error: {error.message}</div>;
    }else if(!isLoaded){
      return <div>Loading..</div>;
    }else{
      return (
        <SingleCard items={this.state.items}/>
        // <div className="card">
        //     {items.map((item) => (
        //         <ul>
        //             <li>Title of the Movie: <span>{item.movie_title}</span></li>
        //             <li>Director's name: <span>{item.director_name}</span></li>
        //         </ul>
        //     ))}
        // </div>
      );
    }
  }
}

export default MoviesList

// Source: https://pusher.com/tutorials/consume-restful-api-react