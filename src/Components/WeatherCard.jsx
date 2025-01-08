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
import moment from 'moment'




function WeatherCard(){
  const dateAndTime = moment().format('LLLL');
  const data = useSelector((state) => state.weather.temperature)
  
  
    const dispatch = useDispatch();
useEffect(() => {
  dispatch(fetchData())
  
  
},[])

  return (
    <div className='w-[23rem] min-w-[23rem] h-[32rem] glassCard p-4'>
      
      <div className='flex w-full just-center, items-center gap-4 mt-12 mb-4'>
        <img src={sun} alt="weather_icon" />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <p className='font-bold text-7xl flex justify-center items-center  ' >{data.clouds}&deg;C </p>
        <img src={data.IconWeather} alt="icon" />
        </div>
      </div>
      <div className='font-bold text-center text-3xl'>
       {data.city}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{dateAndTime}</p>
        
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <p className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>Wind Speed </p>
          <div className='font-normal'>{data.wind} km/h</div>
        <p className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>Humidity </p>
           <div className='font-normal'>{data.humidity} gm/m&#179;</div>
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