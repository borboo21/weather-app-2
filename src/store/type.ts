import { store } from './store';
import {IForecastsState} from "./reducers/forecasts-reducer/types";

export interface IAppState {
    forecasts: IForecastsState
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch