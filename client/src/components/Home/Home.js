import React from 'react'
import './Home.css'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="Home">
                <h1>Welcome to the Stay-At-Home Hub!</h1>
                <p>Whether you're here to relax or catch up on the latest trends, we have the solution for you!</p>
            </div>
        )
    }
}