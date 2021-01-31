import React from 'react';
import axios from 'axios';
import './Trend.css'


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
        // Make calls to Movie API
    }
    render() {
        if (this.props.category === "Movies") {
            return (
                <div className="Trend">
                    <h1>This is the movie section</h1>
                    <iframe src="" title="Trending Movies" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )
        }

        else if (this.props.category === "Jokes") {
            return (
                <div>
                    <div className="div-1">
                        <h1>This is the trending section</h1>
                        <h2>Find the latest movies, music and jokes!</h2>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div></div>
            )
        }
        
    }
}