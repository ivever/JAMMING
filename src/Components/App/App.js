import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResult/SearchResult';
import Playlist from '../Playlist';

import Spotify from '../../util/Spotify';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: [{name: 'name1', artist: 'artist1', album: 'album1', id: 1}, 
      {name: 'name2', artist: 'artist2', album: 'album2', id: 2},
      {name: 'name3', artist: 'artist3', album: 'album3', id: 3}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'playListname1', artist: 'playListartist1', album: 'playListalbum1', id: 4}, 
      {name: 'playListname2', artist: 'playListartist2', album: 'playListalbum2', id: 5}, 
      {name: 'playListname3', artist: 'playListartist3', album: 'playListalbum3', id: 6}]
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

addTrack(track) {
  let tracks = this.state.playlistTrack;
  if (tracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } 
  tracks.push(track);
  this.setState = ({playlistTracks: tracks});
}

removeTrack(track) {
  let tracks = this.state.playlistTracks; 
  tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

  this.setState({ playlistTracks: tracks });
}

updatePlaylistName(name) {
  this.setState({ playlistName: name });
}

savePlaylist() {
  const trackUris = this.state.playlistTracks.map(track => track.uri);
}

search(term) {
  Spotify.search(term).then(SearchResults => {
    this.setState({
      SearchResults: SearchResults
    })
  })
}

  render() {
    return (
      <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          
          <SearchBar onSearch={this.search} />
        <div className="App-playlist">
          
          <SearchResults searchResult={this.state.searchResult} onAdd={this.addTrack}/>
          
          <Playlist playListName={this.state.playListName}
          playListTrack={this.state.playListTrack}
          onRemove={this.removeTrack} 
          onNameChange={this.updatePlaylistName} 
          onSave={this.savePlaylist} />
        </div>
      </div>
  </div>
  )
  }
}

export default App;
