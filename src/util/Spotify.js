// the clientId variable should hold your Spotify clientId
const clientId = '';
const redirectUri = 'http://localhost:3000';

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);

            // This clears the parameter, allowing allowing us to grab the new access token when it expires
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        } else {
            const accessUri = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token
            &scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUri;
        }
    }
}

export default Spotify;