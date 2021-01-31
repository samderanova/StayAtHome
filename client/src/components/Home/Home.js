import React from 'react'
import './Home.css'

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home-Overall">
                <div className="Home">
                    <h1>Welcome to the Stay-At-Home Hub!</h1>
                    <p>Whether you're here to relax or catch up on the latest trends, we have the solution for you!</p>
                </div>
                <p>
                    Have you ever felt bored during the quarantine?
                    Have you ever just stared at the ceiling wondering what to do next?
                    Have you ever looked for that inspiration needed to start your next big project or just relax and take it easy? 
                    Well, look no further, StayAtHome is your one stop solution against boredom, lack of inspiration and just to flat out relax. 
                </p>
            </div>
        )
    }
}