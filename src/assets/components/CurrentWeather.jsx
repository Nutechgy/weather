import React from 'react';

const BackgroundVideo = ({ weatherCondition }) => {
  const videoMap = {
    "snowy": "snowy.mp4",
    "cloudy": "cloudy.mp4",
    "rain": "scattered-showers.mp4",
    "heavyWind,rain,floodWatch": "heavy-wind-rain-floodwatch.mp4",
    "scatteredShowers": "scattered-showers.mp4",
    "lightRain": "light-rain.mp4",
    "brightandsunny": "brightandsunny.mp4",
    "foggy": "foggy.mp4",
    "tornadoWatch": "tornado.mp4"
  };
  const videoFileName = videoMap[weatherCondition.toLowerCase()] || "default.mp4";
  const videoSource = `videos/${videoFileName}`;

  return (
    <div className="weather-video-container">
      <video loop muted autoPlay>
        <source src={videoSource} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
