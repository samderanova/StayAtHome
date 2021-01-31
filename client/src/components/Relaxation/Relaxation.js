import React from 'react'
import './Relaxation.css'

export default class Relaxation extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className="Relaxation">
                <h1>Check out some great movies</h1>
                <div>
                    {/* Movie component here*/}
                </div>
                <h1>How about some music?</h1>
                <div className="playlists">
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdxcBWuJkbcy" title="Motivation"width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM" title="LoFi" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVi45nh2EuPP" title="" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        )
    }
}