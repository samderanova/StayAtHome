import React from 'react';


export default class Trend extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // Make calls to NYT and Trends APIs here using axios
    }
    render() {
        return (
            <div className="Trend">
                {this.props.category === "Trending" 
                ?
                <div>
                    <h1>This is the trending section</h1>
                </div>
                :
                <div>
                    <h1>This is the blank information section</h1>
                </div>
                }
            </div>
        )
    }
}