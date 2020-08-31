import React from 'react';
import './Tracklist.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    render() {
        console.log(this.props.tracks);
        return (
            <div className="TrackList">
                <ul>
                   {this.props.tracks.map(track => <li key={track.id}><Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval}/></li>)}
                </ul>
            </div>
        );
    }
}

export default TrackList;