import { Box, Typography } from "@mui/material";
import Img from "./img";


const CardsBox = () => {
    return (<>
        <Box sx={{
      backgroundColor:'F5F5F5', 

      maxWidth: 1100,
      margin: 'auto'
    }}>
        <Typography     variant='h5' sx={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 5,
            paddingBottom:5,
            
        }}>
            Recent projects
            </Typography>
        <Img/>
    </Box>
    </> );
}
 
export default CardsBox;