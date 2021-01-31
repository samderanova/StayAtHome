import React from 'react'
import ReactDOM from 'react-dom'
import {url} from '../../index'
import axios from 'axios'
import Trend from '../Trend/Trend'
import './Feed.css'

const sidebarColor = "rgb(138, 180, 249)"

export default class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            feed: "Movies",
            movies: [],
            jokes: [],
            rotated: false
        }
        this.toggleMovies = this.toggleMovies.bind(this)
        this.toggleJokes = this.toggleJokes.bind(this)
        this.switchColors = this.switchColors.bind(this)
        this.renderMovies = this.renderMovies.bind(this)
        this.shuffle = this.shuffle.bind(this)
        this.rotateJoke = this.rotateJoke.bind(this)
    }
    componentDidMount() {
        this.renderMovies()
    }
    switchColors() {
        document.getElementById("movies").style.color = sidebarColor
        for (var element of document.getElementsByTagName('h2')) {
            if (element.style.color === sidebarColor) {
                element.style.color = "black"
            }
        }
    }
    shuffle(arr) {
        for (let i=arr.length-1; i>0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr
    }
    renderMovies() {
        document.getElementById("movies").style.color = sidebarColor
        axios.get(`${url}/movies`)
            .then(res => {
                var movieRows = []
                var movieList = this.shuffle(res.data)
                for (var i=0; i<movieList.length; i++) {
                    var movie = movieList[i]
                    movieRows.push(
                        <tr key={i}>
                            <td><a href={movie.movieUri}><img src={movie.image} /></a></td>
                            <td><p>{movie.title}</p></td>
                            <td><p>{movie.description}</p></td>
                        </tr>
                    )
                }
                this.setState({feed: "Movies", movies: movieRows})
            })
            .catch(err => console.log(err))
    }
    rotateJoke(e) {
        e.target.style.transform = 'rotate(0deg)'
    }
    renderJokes() {
        axios.get(`${url}/jokes`)
            .then(res => {
                var jokeRows = []
                for (var i=0; i<res.data.length; i++) {
                    var joke = res.data[i]
                    jokeRows.push(
                        <div style={{padding: 30}} key={i}>
                            <h2>{joke.jokeQuestion}</h2>
                            <p id={`joke${i}`} style={{fontSize: 13, transform: 'rotate(180deg)'}} onClick={(e) => this.rotateJoke(e)}>{joke.jokeAnswer}</p>
                        </div>
                    )
                }
                this.setState({feed: "Jokes", jokes: jokeRows})
            })
            .catch(err => console.log(err))
    }
    toggleMovies() {
        this.switchColors()
        document.getElementById("movies").style.color = sidebarColor 
        this.renderMovies() 
    }
    toggleJokes() {
        this.switchColors()
        document.getElementById("jokes").style.color = sidebarColor
        this.renderJokes()
    }
    render() {
        return (
            <div className="Feed">
                <div className="left">
                    <h2 id="movies" onClick={this.toggleMovies}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                        </svg>
                        Movies
                    </h2>
                    <h2 id="jokes" onClick={this.toggleJokes}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-laughing" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
                        </svg>
                        Jokes
                    </h2>
                </div>
                <div className="right">
                    <Trend category={this.state.feed} movies={this.state.movies} jokes={this.state.jokes}/>
                </div>
            </div>
        )
    }
}