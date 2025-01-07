import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//get api new today
export const fetchData = createAsyncThunk(

  "api/fetchData",
  async ({cityName},_) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=891386664a64a4ab04e363e0aa0c4b1d`;
    try {

      const response = await axios.get(url);
      const res = response.data;
      const description = res.weather[0].description
      const clouds = Math.round(res.main.temp - 273.15);
      const tempMin = Math.round(res.main.temp_min - 273.15);
      const humidity = Math.round(res.main.humidity);
      const tempMax = Math.round(res.main.temp_max - 273.15);
      const feelsLike = Math.round(res.main.feels_like - 273.15);
      const wind = res.wind.speed;
      const city = res.name;
      const country = res.sys.country;
      const weatherTitle = res.weather[0].description;
      const IconWeather = res.weather[0].icon;
      
      
      
      return {
        wind,
        feelsLike,
        humidity,
        country,
        description,
        clouds,
        tempMin,
        tempMax,
        city,
        weatherTitle,
        IconWeather,
      };
    }
    
    catch{
      console.log("error");
      
    }
  }
);

// get api today hourly any 3/H

export const GetHours = createAsyncThunk(
  "api/GetHours",
  async ({lat, lon }) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=34.0346534&lon=6.834543&&units=metric&appid=891386664a64a4ab04e363e0aa0c4b1d`;
    try {
      const response = await axios.get(url);
      const forecastData = response.data.list;
      console.log("the frocast data :", response);
      

      // Get today's date
      const today = new Date().setHours(0, 0, 0, 0);

      // Filter the forecast data for today
      const filteredData = forecastData.filter((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000).setHours(0, 0, 0, 0);
        return forecastDate === today; // Include only forecasts for today
      });

      // Extract the hours from filteredData and prepare them for display
      const hoursData = filteredData.map((forecast) => {
        const date = new Date(forecast.dt * 1000);
        const hour = date.getHours(); // Get the hour from the timestamp
        const temperature = forecast.main.temp; // Get the temperature
        const weatherDescription = forecast.weather[0].description; // Get weather description
        const weatherIconCode = forecast.weather[0].icon; // Get weather description
        console.log("the zkhfkezugfkzeuf",weatherIconCode);
        

console.log(date);

        return {
          hour,
          temperature,
          weatherDescription,
          weatherIconCode,
        };
      });

      console.log("Hourly data for display:", hoursData);

      return { hoursData }; // Return both the original filtered data and the processed hours data
    } catch {
      console.log("Error fetching hourly forecast");
      return { filteredData: [], hoursData: [] }; // Return empty data in case of an error
    }
  }
);
// get latitude and longitude  
export const GetLatLon = createAsyncThunk(
  "api/GetLatLon",
  async ({cityName}) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=891386664a64a4ab04e363e0aa0c4b1d`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      console.log("the data is ", response);
      

      return { lat, lon, data };
    } catch {
      console.log("error");
    }
  }
);


export const weatherApiSlice = createSlice({
  name: "api",
  initialState: { temperature: "red" },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
       
      })
      .addCase(fetchData.fulfilled , (state, action) => {
        state.temperature = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        
      });
  },
});
export default weatherApiSlice.reducer;