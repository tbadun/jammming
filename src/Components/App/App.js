import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    };
  }

  addTrack(track) {
    var playlist = this.state.playlistTracks;
    if (playlist.every(ele => ele.id !== track.id)) {
      playlist.push(track);
      this.setState({playlistTracks: playlist});
    }
  }

  removeTrack(track) {
    var playlist = this.state.playlistTracks.filter(ele => ele.id!==track.id);
    this.setState({playlistTracks: playlist});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    Spotify.savePlaylist(this.playlistName,this.state.playlistTracks.map(track => track.uri)).then(result => alert(result));
  }

  search(term) {
    Spotify.search(term).then(response => {
      this.setState({searchResults: response});
      console.log(JSON.stringify(this.state.searchResults));
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
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
