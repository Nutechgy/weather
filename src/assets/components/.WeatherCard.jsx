import React, { useState, useEffect } from 'react';
import Video from './components/Video';
import audioSnippet from './audio/audio_snippet.mp3';


const Video = () => {
    const [audio, setVideo] = useState('');

    useEffect(() => {
        if (conditions.toLowerCase().includes('clear')) {
            setVideo('clear.mp4');
        } else if (conditions.toLowerCase().includes('cloudy')) {
            setVideo('cloudy.mp4');
        } else if (conditions.toLowerCase().includes('fog')) {
            setVideo('foggy.mp4');
        } else if (conditions.toLowerCase().includes('rain')) {
            setVideo('rain.mp4');
        } else if (conditions.toLowerCase().includes('scatteredshowers')) {
            setVideo('scatteredShowers.mp4');
        } else if (conditions.toLowerCase().includes('snow')) {
            setVideo('snow.mp4');
        } else if (conditions.toLowerCase().includes('thunder')) {
            setVideo('stormy.mp4');
        } else if (conditions.toLowerCase().includes('tornado')) {
            setVideo('tornado.mp4');
        } else if (conditions.toLowerCase().includes('wind')) {
            setVideo('windy.mp4');
        }
    
        // Call the function to set the video URL
        setWeatherVideo();

              // Get the current day of the week
              const dayOfWeek = getDayOfWeek(time);

             // Import the audio snippet based on the day of the week
              import(`./audio/${dayOfWeek.toLowerCase()}.mp3`)
                  .then(audioSnippet => {
                      // Set the audio snippet
                      setAudio(audioSnippet.default);
                  })
                  .catch(error => {
                      console.error(`Failed to import audio snippet for ${dayOfWeek}:`, error);
                  });
                }, [conditions, time]);

                return (
                    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-row'>
                        <p className='text-center'>{new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split('')[0]}</p>
                        <hr />
                        <div className='w-full flex justify-center items-center flex-1 '>
                            <img src={icon} alt='weather' className='w-[4rem] h' />
                        </div>
                        <p className='text-center font-bold'>{temp}&deg;F;</p>
                        {/* Display video */}
                        {video && (
                            <video className='w-full' controls>
                                <source src={video} type='video/mp4' />
                            </video>
                        )}
            
                        {/* Play audio snippet */}
                        {audio && (
                            <audio controls>
                                <source src={audio} type="audio/mp3" />
                                Your browser does not support the audio element.
                            </audio>
                        )}
                    </div>
                );
            };
            
            export default WeatherCard; 
