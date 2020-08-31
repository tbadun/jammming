import React from 'react';
import './SearchResults.css';
import TrackList from '../TrackList/Tracklist';

class SearchResults extends React.Compnent {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList />
            </div>
        );
    }
}

export default SearchResults;