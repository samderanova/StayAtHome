import React from 'react';
import axios from 'axios';
import {url} from '../../index'
import './Trend.css'


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // Make calls to Movie API
        axios.get(`${url}/`)
    }
    render() {
        if (this.props.category === "Trending") {
            return (
                <div className="div-1">
                    <h1>This is the trending section</h1>
                    <h2>Find the latest movies, music and jokes!</h2>
                </div>
            )
        }

        else if (this.props.category === "Movies") {
            return (
                <div className="Trend">
                    <h1>This is the movie section</h1>
                    <iframe src="" title="Trending Movies" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            )
        }

        else if (this.props.category === "") {
            return (
                <div>
                    <h1>Blank</h1>
                </div>
            )
        }
        
    }
}