import {configureStore} from '@reduxjs/toolkit';
import cardsSlice from './cardSlice';



export default configureStore({
    reducer:{
        cards: cardsSlice,
    }
});