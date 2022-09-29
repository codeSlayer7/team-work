import { useSelector } from 'react-redux';
import {Grid, Typography, Card, CardActionArea, CardMedia, CardContent} from '@mui/material'
import { Container } from '@mui/system';




const Img = () => { // подключил стор не смог подключить иконки локально нашел кастомный обьект с картинками 


    const data = useSelector((state) => state.cards.cards)
        
    

    return ( <>
    <Container  >
    <Grid container  spacing={2}>

        {data.map((el)=> 
        <Grid item md={4} lg={4} rowSpacing={2} columnSpacing={2} > 

        <Card sx={{ maxWidth: 345,
                    backgroundColor:'#FFFFFF'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={el.poster}
            alt="green iguana"
          />
          <CardContent sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          
          }}>
            <Typography gutterBottom variant="h6" component="div">
              {el.category}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {el.price}
            </Typography>
          </CardContent>
        </CardActionArea>
       </Card> 

      </Grid> ) }


    </Grid>

    </Container>
        </> 
    );


}
 
export default Img;