import React from 'react';

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
            <div>
                <h1>This is the relaxation page</h1>
                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVi45nh2EuPP" title="Spotify Playlist" width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
        )
    }
}