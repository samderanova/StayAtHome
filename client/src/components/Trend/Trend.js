import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {url} from '../../index'
import './Trend.css'


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentDidMount() {
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