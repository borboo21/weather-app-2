import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {IForecastsState} from './types';
import {IForecastDay} from "../../../types/types";

const initialState: IForecastsState = {};

export const forecastsSlice = createSlice({
    name: 'forecasts',
    initialState,
    reducers: {
        addForecastAC: (state, action: PayloadAction<{ place:string,forecasts:IForecastDay[] }>) => {
            return {
                ...state,
                [action.payload.place]: action.payload.forecasts
            };
        },
}
});

export const {
    addForecastAC,
} = forecastsSlice.actions;

export default forecastsSlice.reducer;