import React, { useState, useEffect } from 'react';
import Video from './components/Video';


const Video = () => {
    const [video, setVideo] = useState('');

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
    }, [conditions]);

    return (
        <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-row'>
            <p className='text-center'>{new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split('')[0]}</p>
            <hr />
            <div className='w-full flex justify-center items-center flex-1 '>
                <img src={icon} alt='weather' className='w-[4rem] h' />
            </div>
            <p className='text-center font-bold'>{temp}&deg;F;</p>
            {/* Assuming you want to display video */}
            {video && (
                <video className='w-full' controls>
                    <source src={video} type='video/mp4' />
                </video>
            )}
        </div>
    );
};

export default WeatherCard;
