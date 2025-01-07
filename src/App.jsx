import './App.css'
import search from './assets/icons/search.svg'
import { BackgroundLayout, WeatherCard, MiniCard } from './Components'
import Today from './Components/Today'
import Tomorrow from './Components/Tomorrow'
import { useState } from 'react'
import { fetchData } from './redux/weatherSlice'
import GetCurrentAddress from './Components/CurrentLocation'

//translition 
//import { useTranslation } from 'react-i18next';




//icon mui material
import RoomIcon from '@mui/icons-material/Room';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import Button from '@mui/material/Button';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


function App() {
  const [cityName, setCityName] = useState("Oujda");
  const dispatch = useDispatch();
  

  // Handle city name change
  function handleChangeCity(e) {
    setCityName(e.target.value);
  }

  // Submit city name
  function submitCity() {
    if (cityName.trim()) {
      dispatch(fetchData({ cityName }));
    }
  }

  // Fetch data on initial load
  useEffect(() => {
    dispatch(fetchData({ cityName: "Oujda" }));
    setCityName('')
  }, [dispatch]);

  return (
    <div className='w-full h-screen  text-white px-8'>
      <nav className='w-full border-b-2 border-gray-400 hover:border-gray-500  hover:scale-105 p-3 flex justify-between items-center'>
        <div className='flex justify-between items-center  '>
          <FilterDramaIcon/>
        <h1 className='font-bold  tracking-wide text-3xl'>Weather App</h1>
        </div>   
        
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search"  className='w-[1.5rem] h-[1.5rem] cursor-pointer ' />
          <input  value = {cityName}
                  onChange = {handleChangeCity}
                  onKeyUp={(e) => { 
           
            if (e.key === 'Enter') { 
              submitCity()
            }
          }} type="text" placeholder='Search city' className='focus:outline-none w-full text-[#212121] text-lg'  />
          
        </div>
        
      <div className='mode'>
        <button>
        <LightModeOutlinedIcon className='light'/>
        </button>
        <Switch/>
        <button>
        <NightsStayOutlinedIcon className='dark'/>
        </button>
      </div>
      </nav>
      <div  className='  w-18 flex justify-center items-center'>
        <Button style={{color:'WHITE', direction:'ltr'}}>
            <RoomIcon style={{width:'50px', height:'30px' }} />
            <GetCurrentAddress   />
        {/* <p className='text-lg font-bold ml-2 '>current location</p> */}
      </Button>
      </div>
      
      <BackgroundLayout></BackgroundLayout>
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        <WeatherCard />

        <div className='flex justify-center gap-8 flex-wrap w-[60%]'> 
       <MiniCard />
        </div>
        <div >
   <Button className='button-t' variant="contained" color="success">
        Today
      </Button>
   </div>
        <div className='mini-card flex justify-center flex-wrap w-[100%]'>
          <Today/>
        </div>
        <br/>
        <div >
   <Button className='button-t' variant="contained" color="success">
        Tomorrow
      </Button>
   </div>
        <div>
           <Tomorrow/>
        </div>
      </main>
    </div>
  )
}

export default App
