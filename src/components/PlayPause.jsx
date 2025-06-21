// PlayPauseButton component for controlling playback
import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

// isPlaying: boolean, activeTrack: object, track: object, onPause: fn, onPlay: fn
const PlayPauseButton = ({ isPlaying, activeTrack, track, onPause, onPlay }) => (
  isPlaying && activeTrack?.title === track.title ? (
    <FaPauseCircle
      size={35}
      className="text-gray-300"
      onClick={onPause}
      title="Pause"
    />
  ) : (
    <FaPlayCircle
      size={35}
      className="text-gray-300"
      onClick={onPlay}
      title="Play"
    />
  )
);

export default PlayPauseButton;
