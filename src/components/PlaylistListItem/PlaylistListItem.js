import React from 'react';

const PlaylistListItem = ({ playlistId, name }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{playlistId}</p>
    </div>
  );
};

export default PlaylistListItem;
