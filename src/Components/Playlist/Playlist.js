import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/Tracklist';

const defaultValue = "New Playlist";

class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input value={defaultValue}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;