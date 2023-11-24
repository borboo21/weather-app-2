import React, { useEffect, useRef, useState } from 'react';
import { Stack, TextField, Typography } from '@mui/material';
import theme from '../../theme';
import {ws} from "../../data/api";
import {useDispatch, useSelector} from "react-redux";
import {addForecastAC} from "../../store/reducers/forecasts-reducer/forecasts-reducer";
import {IAppState} from "../../store/type";

export function ForecastWeather() {
    return(
        <Stack>

        </Stack>
    )
}

