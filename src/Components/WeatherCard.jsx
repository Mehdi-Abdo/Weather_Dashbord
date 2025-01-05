 import sun from '../assets/icons/sun.png'
// import cloud from '../assets/icons/cloud.png'
// import fog from '../assets/icons/fog.png'
// import rain from '../assets/icons/rain.png'
// import snow from '../assets/icons/snow.png'
// import storm from '../assets/icons/storm.png'
// import wind from '../assets/icons/windy.png'
import '../index.css'
//import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../redux/weatherSlice'




function WeatherCard(){
  const data = useSelector((state) => state.weather.temperature)
 
  
    const dispatch = useDispatch();
  dispatch(fetchData())
useEffect(() => {

},[])
  
  return (
    <div className='w-[23rem] min-w-[23rem] h-[32rem] glassCard p-4'>
      
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={sun} alt="weather_icon" />
        <p className='font-bold text-7xl flex justify-center items-center  ' >{data.clouds}&deg;C </p>
      </div>
      <div className='font-bold text-center text-xl'>
       {data.city}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>05/01/2025</p>
        
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed {data.speed}<p className='font-normal'>5,3 km/h</p></p>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity {data.humidity} <p className='font-normal'>34 gm/m&#179;</p></p>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>N/A</p>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
       {data.description}
      
      </div>
    </div>
  )
}

export default WeatherCard