import { Box } from '@mui/material';
import './App.css';
import CardsBox from './component/cards/cardsSection';



function App() {
  return (
    <Box sx={{
      backgroundColor:'#FFFFFF',
      maxWidth: 1000,
      margin: 'auto'
    }}>

      <CardsBox/>
     
    
    </Box>
  );
}

export default App;
