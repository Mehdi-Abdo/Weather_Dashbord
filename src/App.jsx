import './App.css';
import search from './assets/icons/search.svg';
import { BackgroundLayout, WeatherCard, MiniCard } from './Components';
import Today from './Components/Today';
import Tomorrow from './Components/Tomorrow';
import { useState, useEffect } from 'react';
import { fetchData } from './redux/weatherSlice';
import GetCurrentAddress from './Components/CurrentLocation';

import RoomIcon from '@mui/icons-material/Room';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import Button from '@mui/material/Button';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';

function App() {
  const [cityName, setCityName] = useState('ifrane');
  const dispatch = useDispatch();

  const handleChangeCity = (e) => setCityName(e.target.value);

  const submitCity = () => {
    if (cityName.trim()) {
      dispatch(fetchData({ cityName }));
    }
  };

  useEffect(() => {
    dispatch(fetchData({ cityName: 'ifrane' }));
    setCityName('');
  }, [dispatch]);

  return (
    <div className="w-full h-screen text-white px-4 md:px-8">
      <nav className="w-full border-b-2 border-gray-400 p-3 flex flex-wrap sm:flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <FilterDramaIcon />
          <h1 className="font-bold tracking-wide text-2xl md:text-3xl xl:text-4xl">Weather </h1>
        </div>

        <div className="bg-white w-full sm:w-[20rem] shadow-2xl rounded flex items-center p-2 gap-2">
          <img
            src={search}
            alt="search"
            className="w-[1.5rem] h-[1.5rem] cursor-pointer"
          />
          <input
            value={cityName}
            onChange={handleChangeCity}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city"
            className="focus:outline-none w-full text-[#212121] text-sm md:text-lg"
          />
        </div>

        <div className="mode flex items-center gap-2">
          <button>
            <LightModeOutlinedIcon className="light" />
          </button>
          <Switch />
          <button>
            <NightsStayOutlinedIcon className="dark" />
          </button>
        </div>
      </nav>

      <div className="flex justify-center items-center my-4">
        <Button style={{ color: 'WHITE' }}>
          <RoomIcon style={{ width: '50px', height: '30px' }} />
          <GetCurrentAddress />
        </Button>
      </div>

      <BackgroundLayout />

      <main className="w-full flex flex-wrap gap-6 py-4 px-4 md:px-[10%] items-center justify-center">
        <WeatherCard />

        <div className="flex flex-col md:flex-row justify-center gap-4 w-full md:w-[60%]">
       
          <MiniCard />
        </div>
        <hr className=" line bg-white w-full" />
        <div className="w-full flex justify-center my-4">
          <Button className="button-t" variant="contained" color="success">
            Today
          </Button>
        </div>

        <div className="w-full flex justify-center flex-wrap">
          <Today />
        </div>

        <div className="w-full flex justify-center my-4">
          <Button className="button-t" variant="contained" color="success">
            Tomorrow
          </Button>
        </div>

        <div className="w-full flex justify-center flex-wrap">
          <Tomorrow />
        </div>
      </main>
    </div>
  );
}

export default App;
