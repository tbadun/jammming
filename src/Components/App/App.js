import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: [
        {
          id: 4,
          name: "D'yer Maker",
          artist: "Led Zeppelin",
          album: "Houses of the Holy"
        }
      ],
      playlistName: "Classic Rock",
      playlistTracks: [
        {
          id: 1,
          name: "Tiny Dancer",
          artist: "Elton John",
          album: "Madman Across The Water"
        },{
          id: 2,
          name: "Moonage Daydream",
          artist: "David Bowie",
          album: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars"
        },{
          id: 3,
          name: "Bohemian Rhapsody",
          artist: "Queen",
          album: "Live Killers"
        },
      ]
    };
  }

  addTrack(track) {
    if (this.state.playlistTracks.every(ele => ele.id !== track.id)) {
      this.state.playlistTracks.push(track);
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
