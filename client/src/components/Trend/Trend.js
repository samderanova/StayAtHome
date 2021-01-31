<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {url} from '../../index'
=======
import React from 'react';
import axios from 'axios';
>>>>>>> 993d3d54a9fe0133fb925c02a582fc0924769867
import './Trend.css'


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
<<<<<<< HEAD
=======
        // Make calls to Movie API
>>>>>>> 993d3d54a9fe0133fb925c02a582fc0924769867
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
<<<<<<< HEAD
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="movie-rows">
                            {this.props.movies}
                        </tbody>
                    </table>
=======
                    <h1>This is the movie section</h1>
                    <iframe src="" title="Trending Movies" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
>>>>>>> 993d3d54a9fe0133fb925c02a582fc0924769867
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

        else {
            return (
                <div></div>
            )
        }
        
    }
}