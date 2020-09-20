import React from 'react';
import './VideoCard.scss'

const VideoCard = ({ movie }) => {
  return (
    <div className='videoCard'>
      <img
        src=""
        alt=""
      />
      <p>Description</p>
      <h2>Movie title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;