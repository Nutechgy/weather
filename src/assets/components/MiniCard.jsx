import React from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/wind.png'
import '../index.css'

const Miniard = ({
    place,
    tempreature,
    conditions,
    windspeed,
    humidity,
    heatIndex,
    iconString,

}) => {

    const [icon, setIcon] = useState()
    const { time } = useDate()

    useEffect(() => {
        if (iconString) {
        if (iconString.toLowerCase().includes('clear')) {
            setIcon(sun)

        } else if (iconString.toLowerCase().includes('cloudy')) {
            setIcon(clouds)

        } else if (iconString.toLowerCase().includes('fog')) {
            setIcon(fog)

        } else if (iconString.toLowerCase().includes('rain')) {
            setIcon(rain)

        } else if (iconString.toLowerCase().includes('scattered showers')) {
            setIcon(scatteredShowers)

        } else if (iconString.toLowerCase().includes('snow')) {
            setIcon(snow)

        } else if (iconString.toLowerCase().includes('thunder')) {
            setIcon(storm)

        } else if (iconString.toLowerCase().includes('tornado')) {
            setIcon(tornado)

        } else if (iconString.toLowerCase().includes('wind')) {
            setIcon(wind)

        }
    }

},[iconString])

return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
        <div className='flex w-full justify-center ga mt-12 mb-4'>
            <img src={icon} alt='weather_icon' />
            <p className='font-bold text-5xl flex justify-center items-center'>{temperature} &deg;</p>
        </div>

        <div className='w-full flex justify-between items-center'>
            {place}
        </div>

        <div className='w-full flex justify-between items-center' mt-4>
            <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
            <p className='flex-1 text-center p-2'>{time}</p>
        </div>

        <div className='w-full flex justify-between items-center mt-4 gap-4'>
            <p className='flex-1 text-center p-2 font-bold bg-black-600 shadow rounded-lg'></p>
            <p class="temperature">${data.main.temp}°F</p>
            <p class="condition">${data.weather[0].description}</p>
            <p class="wind-speed">${data.wind.speed} km/h Wind</p>
            <p class="humidity">${data.main.humidity}% Humidity</p>  
            </div>

<div className='w-full flex justify-center items-center flex-1 '>g src={icon}
<img src={icon} alt="weather" className='w-[4rem] h' />
            <hr classname='bg-slate-600'></hr>
            <div className='w=full p-4 flex justify-center items-center text=3xl font-semibold'>             
            </div>

</div>
    </div>
)}
export default MiniCard
