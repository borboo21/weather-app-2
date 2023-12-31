import React, { useEffect, useRef, useState } from 'react';
import {CircularProgress, Stack, TextField, Typography} from '@mui/material';
import theme from '../../theme';
import {ws} from "../../data/api";
import {useDispatch} from "react-redux";
import {addForecastAC} from "../../store/reducers/forecasts-reducer/forecasts-reducer";

export function SearchBar() {

    const [value, setValue] = useState("");
    const [width, setWidth] = useState(0);
    const [maxWidth, setMaxWidth] = useState(0);
    const [isLoading,setLoading] = useState(false)
    const falseInputRef = useRef(null);
    const textStartRef = useRef(null);
    const textEndRef = useRef(null);
    const timerRef = useRef(null);
    const dispatch = useDispatch();


    useEffect(() => {
        const el = falseInputRef.current as HTMLElement;
        if (!el) return;
        setWidth(el.offsetWidth);
    },[value]);

    useEffect(() => {
        if (value.length < 1) return;
        if (timerRef) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setLoading(true)
            ws.getForecastWeather(value,3).then((data) => {
                if (data){
                    dispatch(addForecastAC({ place: value, forecasts:data }));
                }
            }).finally(() =>{
                setLoading(false)
            });
        }, 1000);
    },[value]);

    React.useEffect(() => {
        const onResize = () => {
            const textStartEl = textStartRef?.current?.offsetWidth || 0;
            const textEndEl = textEndRef?.current?.offsetWidth || 0;
            const padding = parseFloat(theme.spacing(6));
            const maxWidth = window.innerWidth < theme.breakpoints.values.sm ?
                parseFloat(theme.spacing(30))
                : window.innerWidth - textStartEl - textEndEl - padding
            setMaxWidth(maxWidth);
        };

        onResize();

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return(
        <Stack
            direction="row"
            sx={{
                position:"relative",
                justifyContent: "center",
                fontWeight: "medium",
                alignItems: "center",
                gap: theme.spacing(0.5),
                [theme.breakpoints.down('sm')]: {
                    flexDirection: 'column'
                }
            }}
        >
            <Typography
                ref={textStartRef}
                id="weatherStatus"
                sx={textStyle}
            >
                Right now in
            </Typography>
            <TextField
                id="searchInput"
                variant="standard"
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                sx={{
                    input: {
                        ...inputStyle,
                        color: theme.palette.primary.main,
                        textAlign: "center"
                    },
                    minWidth: theme.spacing(15),
                    width,
                    maxWidth,
                }}
            />
            <Typography
                ref={textEndRef}
                id="weatherStatus"
                sx={textStyle}
            >
                ,good weather
            </Typography>
            <Stack
                ref={falseInputRef}
                sx={{
                    ...inputStyle,
                    position: "absolute",
                    opacity: 0,
                    pointerEvents: "none",
                }}>
                {value}
            </Stack>
            {isLoading ? <CircularProgress color="inherit" sx={{
                position:"absolute",
                right: theme.spacing(-6)
            }} /> : <Stack/> }
        </Stack>
    )
}

const textStyle = {
    fontSize: "h6.fontSize",
    letterSpacing: theme.spacing(),
    whiteSpace: 'nowrap'
};

const inputStyle = {
    p: theme.spacing(0.5),
    fontFamily: theme.typography.fontFamily,
    fontSize: "h6.fontSize",
    letterSpacing: theme.spacing(0.25),
}
