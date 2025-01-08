import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
//import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useSelector, useDispatch } from "react-redux";
import { GetHours } from "../redux/weatherSlice";
import { useEffect } from "react";





export default function Today() {
 
  const dispatch = useDispatch();
  const { hoursData } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(GetHours());
  }, [dispatch]);

  

  return (
    <div className="hourly-forecast">
      {hoursData.map((data, index) => (
        <div key={index} className="forecast-item">
           <Card  className=" mb-3 shadow-lg rounded-lg">
       <Grid container alignItems="center" justifyContent="center" >
        <div className="w-full bg-blue-600">
         <Grid className="mb-3">
         <Typography variant="h6" component="div" className="text-white " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
           {data.hour}:00
           
             </Typography>
            
           </Grid>
         </div> 
         <Grid item xs={8}>
           <CardContent>
            <img
            src={`https://openweathermap.org/img/wn/${data.weatherIconCode}@2x.png`}
            alt={data.weatherDescription}
            className="weather-icon"
          />
           
           <Typography variant="h6" component="div" className="text-black " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
           {data.temperature}°C
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
        </div>
      ))}
    </div>
  );
}



// const Today =  [
//     { hour: "9 pm" ,temperature: "38", weatherIconCode: fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode: fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode: fog},
//     { hour: "9 pm", temperature: "38", weatherIconCode:fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode: fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode: fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode:fog },
//     { hour: "9 pm", temperature: "38", weatherIconCode: fog },
 
//   ];
  
  
//   const TodayX = Today.map((card, index) => {
//     return (
//    <div   key={index} > 
//    <Card  className=" mb-3 shadow-lg rounded-lg">
//       <Grid container alignItems="center" justifyContent="center" >
//        <div className="w-full bg-blue-600">
//         <Grid className="mb-3">
//         <Typography variant="h6" component="div" className="text-white " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
//           {data.hour}:00
           
//             </Typography>
            
            
//         </Grid>
//         </div> 
//         <Grid item xs={8}>
//           <CardContent>
          //  <img
          //   src={`https://openweathermap.org/img/wn/${data.weatherIconCode}@2x.png`}
          //   alt={data.weatherDescription}
          //   className="weather-icon"
          // />
           
//            <Typography variant="h6" component="div" className="text-black " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
//            {data.temperature}°C
//             </Typography>
//           </CardContent>
//         </Grid>
//       </Grid>
//     </Card>
//     </div>
    


// );
// });

// return (
//     <div  className="flex flex-row justify-Start gap-8">
//       {TodayX}
//     </div>
//   );
// }