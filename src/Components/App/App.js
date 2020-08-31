import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
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
      ],
      trackURIs: []
    };
  }

  addTrack(track) {
    if (this.state.playlistTracks.every(ele => ele.id !== track.id)) {
      this.state.playlistTracks.push(track);
    }
  }

  removeTrack(track) {
    this.state.playlistTracks = this.state.playlistTracks.filter(ele => ele.id!==track.id);
    console.log(this.state.playlistTracks.map(ele => ele.name).join())
  }

  updatePlaylistName(name) {
    this.state.playlistName = name;
  }

  savePlaylist() {
    this.state.trackURIs = this.state.playlistTracks.map(track => track.uri);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
