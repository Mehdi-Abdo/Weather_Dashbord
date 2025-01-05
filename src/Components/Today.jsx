import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import fog from '../assets/icons/fog.png'





export default function Today() {
const Today =  [
    { time: "9 pm", temperature: "38", icon: fog },
    { time: "9 pm", temperature: "38", icon: fog },
    { time: "9 pm", temperature: "38", icon: fog},
    { time: "9 pm", temperature: "38", icon:fog },
    { time: "9 pm", temperature: "38", icon: fog },
    { time: "9 pm", temperature: "38", icon: fog },
    { time: "9 pm", temperature: "38", icon:fog },
    { time: "9 pm", temperature: "38", icon: fog },
 
  ];

  const TodayX = Today.map((card, index) => {
    return (
   <div   key={index} > 
   <Card  className=" mb-3 shadow-lg rounded-lg">
      <Grid container alignItems="center" justifyContent="center" >
       <div className="w-full bg-blue-600">
        <Grid className="mb-3">
        <Typography variant="h6" component="div" className="text-white " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
           {card.time}
            </Typography>
        </Grid>
        </div> 
        <Grid item xs={8}>
          <CardContent>
          <CardMedia
            component="img"
            height="100"
            image={card.icon}
            alt="Weather Icon"
            className="p-2 mb-3"
          />
           
           <Typography variant="h6" component="div" className="text-black " style={{display:"flex" , fontWeight:"bold",alignItems:"center", justifyContent:"center"}}>
            {card.temperature}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
    </div>
    


);
});

return (
    <div  className="flex flex-row justify-Start gap-8">
      {TodayX}
    </div>
  );
}