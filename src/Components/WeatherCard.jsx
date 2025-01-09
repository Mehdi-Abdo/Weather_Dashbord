import '../index.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../redux/weatherSlice';
import moment from 'moment';
import { IconButton } from '@mui/material';

function WeatherCard() {
  const dateAndTime = moment().format('LLLL');
  const data = useSelector((state) => state.weather.temperature);
  const dispatch = useDispatch();

  useEffect(() => {
    // Provide a default city name for the initial fetch
    dispatch(fetchData({ cityName: "Rabat" }));
  }, [dispatch]);

  // Handle loading or undefined data
  if (!data) {
    return (
      <div className="w-[23rem] h-[32rem] glassCard p-4 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-[23rem] min-w-[23rem] h-[32rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-8 mb-2">
        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
          <p className="font-bold text-7xl flex justify-center items-center">
            {data.clouds}&deg;C
          </p>
          <IconButton>
            <img
              src={`http://openweathermap.org/img/wn/${data.iconWeather}@2x.png`}
              alt="Weather Icon"
            />
          </IconButton>
        </div>
      </div>
      <div className="font-bold text-center text-3xl">
        {data.city}
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{dateAndTime}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <span className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed
          <p className="font-normal">{data.wind} km/h</p>
        </span>
        <span className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity
          <p className="font-normal">{data.humidity} %</p>
        </span>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Min: {data.tempMin}&deg;C</p>
        <p className="font-semibold text-lg">Max: {data.tempMax}&deg;C</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {data.description}
      </div>
    </div>
  );
}

export default WeatherCard;
