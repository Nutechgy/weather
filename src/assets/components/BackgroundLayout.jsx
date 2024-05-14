import React, { useStateContext } from '../Context'
//videos
import clear from '..assets/video.jsx/clear.mp4'
import cloudy from '..assets/video.jsx/cloudy.mp4'
import foggy from '..assets/video.jsx/foggy.mp4'
import stormy from '..assets/video.jsx/stormy.mp4'
import rain from '..assets/video.jsx/rain.mp4'
import scatteredShowers from '..assets/video.jsx/scattered showers.mp4'
import snowy from '..assets/video.jsx/snowy.mp4'
import tornado from '..assets/video.jsx/.mp4'

const BackgroundLayout = () => {

    const {weather} = useStateContext() 
    const [image, setImage] = useState(clear)

useEffect(() => { 
    if (weather.conditions) {
        let videoString = weather.conditions
        if(videoString.toLowerCase().includes('clear')) {
            setVideo(clear)

        }else if (videoString.toLowercase().includes('cloudy')){
            setVideo(cloudy)

        }else if (videoString.toLowercase().includes('foggy')){
            setVideo(foggy)

        }else if (videoString.toLowercase().includes('heavywind,rain,Flooding')){
          setVideo(heavywind,rain,Flooding)

        }else if (videoString.toLowercase().includes('light rain')){
            setVideo(rain)

        }else if (videoString.toLowercase().includes('scattered showers')){
            setVideo(scatteredShowers)

        }else if (videoString.toLowercase().includes('snowy')){
            setVideo(snowy)

        }else if (videoString.toLowercase().includes('tornado')){
            setVideo(tornado)

        }}
        })
        }

return (
    <>
            <img
                src='https://images.unsplash.com/photo-1499346030926-9a72daac6c63?q=80&w=2000&h=1000&fit=crop'
                alt="clouds"
                className='h-screen w-full fixed left-0 top-0 -z-[10]'
            />
            <div>BackgroundLayout</div> {/* Add your content here */}
        </>
    );


export default BackgroundLayout;