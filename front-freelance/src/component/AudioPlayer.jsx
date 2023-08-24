import React, { useEffect, useRef } from 'react';

function AudioPlayer({ audioUrl }) {
    const audioRef = useRef(null);
    

  useEffect(() => {
    if (audioRef.current && audioUrl) {
      audioRef.current.src = audioUrl;
    }
  }, [audioUrl]);

  return (
    <div>
      <audio ref={audioRef} controls />
    </div>
  );
}

export default AudioPlayer;