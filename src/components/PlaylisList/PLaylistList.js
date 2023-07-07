import React, { useEffect, useState } from 'react';
import Spotify from '../../util/Spotify'; // Replace './Spotify' with the actual file path

const PlaylistList = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        Spotify.getUserPlaylists()
            .then(playlists => {
                setPlaylists(playlists);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    //   componentWillMount() {
    //     Spotify.getUserPlaylists()
    //       .then(playlists => {
    //         // Handle the retrieved playlists as needed
    //         console.log(playlists);
    //       })
    //       .catch(error => {
    //         // Handle any errors that occurred during the API request
    //         console.error(error);
    //       });
    //   }

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const retrievedPlaylists = await Spotify.getUserPlaylists();
                setPlaylists(retrievedPlaylists);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPlaylists();
    }, []);

    return (
        <div>
            <h2>Playlist List</h2>
            {playlists.map(playlist => (
                <div key={playlist.playlistId}>
                    <h3>{playlist.name}</h3>
                    <p>{playlist.playlistId}</p>
                </div>
            ))}
        </div>
    );
};

export default PlaylistList;
