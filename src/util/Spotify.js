// import SearchBar from "../Components/SearchBar/SearchBar";

const CLIENT_ID = '52ff976531d44196bb13c845dabe9d75';
const REDIRECT_URI = 'jammming_example.surge.sh';

var accessToken = '';
var expiresIn = 0;

const parseResponse = element => {
    return {
        id: element.id,
        name: element.name,
        artist: element.artists[0].name,
        album: element.album.name,
        uri: element.uri
    };
}

const Spotify = {
    getAccessToken: () => {
        if (accessToken !== '') {
            console.log("TOKEN FOUND");
            return accessToken;
        }
        console.log("TOKEN CREATED");
        window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=playlist-modify-public`;
        const url = window.location.href;
        accessToken = url.match(/access_token=([^&]*)/)[1];
        expiresIn = Number(url.match(/expires_in=([^&]*)/)[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
    },

    savePlaylist: async(playlistName, URIs) => {
        if (!(playlistName && URIs)) {
            return 0;
        }
        var headers = { headers: { Authorization: `Bearer ${accessToken}` } };
        const userId = fetch(`https://api.spotify.com/v1/users/me`, headers)
            .then(response => {
                return response.json().id;
            });
        const playlistId = fetch(`https://api.spotify.com/v1/users/${await userId}/playlists?content-type=application/json&name=${playlistName}`, headers)
            .then(response => {
                return response.json().id;
            });
        return playlistId;
    },

    search: async term => {
        Spotify.getAccessToken();
        console.log("AT: " + accessToken)
        const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
        console.log(url)
        return fetch(url, { headers: { Authorization: `Bearer ${accessToken}` } })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                console.log("IS ARRAY: " + Array.isArray(jsonResponse.tracks.items));
                return jsonResponse.tracks.items.map(track => { return parseResponse(track) });
            });
    }
}


export default Spotify;