import React, { useRef, useEffect } from 'react';
import video from '../images/intro.mp4';

const Container = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust the threshold as needed
    };

    const callback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start playing the video when it comes into view
          videoRef.current.play();
        } else {
          // Pause the video when it goes out of view
          videoRef.current.pause();
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(videoRef.current);

    return () => observer.disconnect(); // Clean up the observer

  }, []);

  return (
    <div className='container'>
      <div className='saas-container'>
        <div className='video'>
          <video ref={videoRef} src={video} autoPlay muted loop playsInline controls={false}></video>
        </div>
      </div>
    </div>
  );
}

export default Container;
