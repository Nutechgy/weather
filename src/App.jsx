import React, { useState,useEffect } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import { StateContextProvider }  from './Context/index';
import { BackgroundLayout,BackgroundVideo, WeatherCard, MiniCard } from './Components';;
import './App.css'; // Import your custom CSS styles here
import  {App} from ()  =>{
  useSpeechSynthesis();
  const [data,setData] = useState({})
  const { weather, thisLoction, values } = useStateContext('');
  const [location, setLocation] = useState('')
  const [input, setInput] = useState('');

  const url = (`${forecastBaseUrl}?q=${city}&appid=${forecastApiKey}&units=metric`)
  const searchLocation = (event) => {
  if (event.key === 'Enter')
    axios.get(url).then(response);  {
    setData(response.data)
    console.log(response.data)
    }
  }
}
  

  // Function to read out the weather information
  const readWeatherInfo = () => {
    speak(`Current weather in ${thisLoction}. Temperature is ${weather.temp} degrees Fahrenheit. Conditions are ${weather.conditions}.`);
  };

  useEffect(() => {
    // Read out the weather information when the app loads
    readWeatherInfo();
  }, [thisLoction, weather.temp.conditions]); // Empty dependency array to trigger the effect only once

  const [input, setInput] = useState('');

  const handleAlarmSubmit = (alarm) => {
    saveAlarm(alarm);
    // Implement scheduling alarm logic here
    // For example, you can store the alarm data in local storage or a database
  };
  <StateContextProvider>
  return (
    
      <div className='w-full h-screen text-blue px-8'></div>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'> Weather </h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem]' />
          <input
            type="text"
            className='focus:outline-none  w-full text-[#212121] text-lg'
            value={input}
            onChange={e => setInput(e.target.value)} />
          <label htmlFor="city">Enter City:</label>
          <input type="text" id="city" placeholder="City" aria-label="Enter City" />
          <button type="button" id="current-weather-btn">Search Current Weather</button>
          <button type="button" id="forecast-btn">5-Day Forecast</button>
          <form />
          <div id="search-history">
            <ul id="history-list"></ul>
          </div>
        </div>
      </nav>
      <div id="current-weather"></div>
      <div className="weather-card"></div>
      <div className="day">Monday</div>
      <div className="video-container">
        <video loop muted autoplay>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
      <BackgroundLayout />
      <main className="weather-details-container">
        <div className="weather-details">/</div>

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
          {values?.slices(1, 7).map(curr => (
            <MiniCard
              key={curr.date.time}
              time={curr.datetime}
              place={thisLocation}
              temperature={weather.temp}
              conditions={weather.conditions}
              windspeed={weather.windspeed}
              humidity={weather.humidity}
              iconString={weather.conditions} />
          ))}
        </div>
      </main>
      {/* Integrate AlarmForm component */}
      <AlarmForm onSubmit={handleAlarmSubmit} />
    </StateContextProvider>
  
export default App;
