 //import sun from '../assets/icons/sun.png'
// import cloud from '../assets/icons/cloud.png'
// import fog from '../assets/icons/fog.png'
// import rain from '../assets/icons/rain.png'
// import snow from '../assets/icons/snow.png'
// import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchData } from '../redux/weatherSlice'

export default function MiniCard() {

  const data = useSelector((state) => state.weather.weather)

  
    const dispatch = useDispatch();
    useEffect(() => {
  dispatch(fetchData())

},[])
  
  const cardX = [
    { day: "monday", temperature: "38", windspeed: "3.5 km/h", icon: "x" },
    { day: "tuesday", temperature: "32", windspeed: "4.2 km/h", icon: "y" },
    { day: "wednesday", temperature: "28", windspeed: "5.1 km/h", icon: "z" },
    { day: "thursday", temperature: "23", windspeed: "5.1 km/h", icon: "x" },
    { day: "friday", temperature: "25", windspeed: "5.1 km/h", icon: "y" },
    { day: "saturday", temperature: "30", windspeed: "5.1 km/h", icon: "z" },
  ];

  const cardY = cardX.map((card, index) => {
    return (
      <div
        key={index}


   className='glassCard justify-between items-center m-2 w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className='text-center' >
       {card.day}
      </p>
      <hr className='bg-white'/>
      <div className='w-full flex justify-center items-center flex-1'>
        <img src={wind} alt="forecast not available" className='w-[4rem] h-[4rem]' />
      </div>
      <p className='text-center font-bold'> 34&deg;C</p>
    </div>
  )
});
return (
  <div className='w/1/2 mx-auto flex flex-wrap justify-center items-center'>
    {cardY}
  </div>
);
}
