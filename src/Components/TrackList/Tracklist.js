import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <ul>
                    {this.props.tracks.map(track => {<li key={track.id}><Track track={track}/></li>})}
                </ul>
            </div>
        );
    }
}

export default TrackList;