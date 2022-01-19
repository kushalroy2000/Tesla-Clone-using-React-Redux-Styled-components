import { configureStore } from "@reduxjs/toolkit";
import carReducer from './features/car/carSlice'

const Store = configureStore({
    reducer: {
        car: carReducer
    }
})

export default Store