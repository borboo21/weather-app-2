import { configureStore } from '@reduxjs/toolkit'
import forecastsReducer, {forecastsSlice} from "./reducers/forecasts-reducer/forecasts-reducer";

export const store = configureStore({
    reducer: {
    forecasts: forecastsReducer
    },
})