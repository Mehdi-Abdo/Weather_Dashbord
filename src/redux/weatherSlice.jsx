import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk(
  "api/fetchData",
  async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=rabat&appid=891386664a64a4ab04e363e0aa0c4b1d`;
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