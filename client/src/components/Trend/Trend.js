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
        if (this.props.category === "Trending") {
            return (
                <div>
                    <h1>This is the trending section</h1>
                </div>
            )
        }

        else if (this.props.category === "Movies") {
            return (
                <div className="Trend">
                    <h1>Blank</h1>
                </div>
            )
        }

        else if (this.props.category === "") {
            return (
                <div>
                    
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