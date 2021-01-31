import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import {url} from '../../index'
import './Trend.css'


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: [
                {Picture: '', Title: '', Overview: ''}
            ]
        }
    }
    componentDidMount() {
    }
    renderTableHeader() {
        let header = Object.keys(this.state.header[0])
        return header.map((key, index) => {
           return <th key={index}>{key}</th>
        })
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
                    <h2 style={{paddingBottom: 30, textAlign: 'center'}}>How about a movie or two? Or three?</h2>
                    <table>
                        <thead>
                            <tr>
                                {this.renderTableHeader()}
                            </tr>
                        </thead>
                        <tbody id="movie-rows">
                            {this.props.movies}
                        </tbody>
                    </table>
                </div>
            )
        }

        else if (this.props.category === "Jokes") {
            return (
                <div>
                    {this.props.jokes}
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