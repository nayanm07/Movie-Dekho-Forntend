import React, { useEffect, useRef } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css'; // Import the Plyr CSS file

function VideoPlayer(perams) {

  console.log(perams.movie);

  
  const videoRef = useRef(null);

  useEffect(() => {
    new Plyr(videoRef.current, {
      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
      settings:['captions', 'quality', 'speed', 'loop'],
      quality: {
        default: 1080,
        options: [1080, 720, 480],
        forced: true
      },
      speed: {
        selected: 1,
        options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
        forced: true
      },
      captions: {
        active: true,
        language: 'en'
      },

      
    });
  }, []);

  return (

    
    <div data-plyr-provider="video"  className='mx-auto '>
      <video className='' ref={videoRef} playsInline controls poster={perams.poster} style={{maxWidth:'100vw'}}>
        <source src={perams.movie} type="video/mp4" />
      </video>
    
    </div>


    

    
  );

}

export default VideoPlayer;
