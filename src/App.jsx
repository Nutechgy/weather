import { useState } from 'react'
import './App.css'
import search from './assets/icons/search.svg'
import {useSteteContext} from './Context'
import {BackgroundLayout, WeatherCard, MiniCard } from'./Components'

function App() {

  const [input, setInput] = useSate('')
  const {weather, thisLoction, values} = useStateContext()
   // console.log(weather)
}
  return (

      <><div className='w-full h-screen text-blue px-8'></div><nav className='w-full p-3 flex justify-between items-center'><nav />
      <h1 className='font-bold tracking-wide text-3xl'> Weather </h1>

      <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>

        <img src={search} alt="search" className='w-[1.5rem]' />
        <input onKeyUp={(e) => {
          if (e.key === 'Enter') {
            //submit the form
          }
        } } type="text" className='focus:outline-none  w-full text-[#212121] text-lg' value={input} onChange={e => setInput(e.target.value)} />
      </div>


    </nav><BackgroundLayout></BackgroundLayout><main className='w-full flex flex wrap gap-8 py px-[10%] items-center justify-center'>

        <MiniCard
          place={thisLocation}
          temperature={weather.temp}
          conditions={weather.conditions}
          windspeed={weather.windspeed}
          humidity={weather.humidity}
          iconString={weather.conditions} />
        <div Name='flex justify-center gap-8 flex wrap w-[60%]'>
          {values?.slices(1, 7).map(curr => {
            <MiniCard
              key={curr.date.time}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions} />
          })}

        </div>
      </main></>
  )
export default App ()
