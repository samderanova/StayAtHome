import React from 'react'
import Trend from '../Trend/Trend'
import './Feed.css'


export default class Feed extends React.Component {
    constructor() {
        super()
        this.state = {
            feed: "Trending"
        }
        this.toggleTrending = this.toggleTrending.bind(this)
        this.toggleCovidInfo = this.toggleCovidInfo.bind(this)
    }
    componentDidMount() {

    }
    toggleTrending() {
        // If the color of the h2 element with id #covidInfo has this color (a light blue), then change it to black
        if (document.getElementById("covidInfo").style.color === "rgb(138, 180, 249)") {
            document.getElementById("covidInfo").style.color = "black"
        }
        // Change the color of the h2 element with id #trending to this color
        document.getElementById("trending").style.color = "rgb(138, 180, 249)"
        // Set the state to trending in order to toggle the Trend component that contains trends
        this.setState({feed: "Trending"})
    }
    toggleCovidInfo() {
        if (document.getElementById("trending").style.color === "rgb(138, 180, 249)") {
            document.getElementById("trending").style.color = "black"
        }
        document.getElementById("covidInfo").style.color = "rgb(138, 180, 249)"  
        // Set the state to COVID Information in order to toggle the Trend component that contains COVID information      
        this.setState({feed: "COVID Information"})
    }
    render() {
        return (
            <div className="Feed">
                <div className="left">
                    <h2 id="trending" onClick={this.toggleTrending}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        Trending
                    </h2>
                    <h2 id="covidInfo" onClick={this.toggleCovidInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
                        </svg>              
                    Blank</h2>
                </div>
                <div className="right">
                    {this.state.feed === "Trending" // If the state of feed is "Trending", then render trending stuff
                    ?
                        <Trend category="Trending"/>
                    : // otherwise, render ___
                        <Trend category="Blank" />
                    }
                </div>
            </div>
        )
    }
}