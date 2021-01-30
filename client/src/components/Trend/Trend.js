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
                    {this.props.category}
                </div>
                :
                <div>
                    {this.props.category}
                </div>
                }
            </div>
        )
    }
}