import React from 'react';
import {Card, CardContent, CardMedia, Container, Stack, Typography} from '@mui/material';
import theme from '../../theme';
import {AcUnitOutlined} from "@mui/icons-material";

export function ForecastWeather() {
    const days = [1,2,3,4]
//days.map(day =>
  // <WeatherCard icon={day.icon}
  //             tempMin={day.tempMin}
  //             tempMax={day.tempMax}
  //             dayNum={day.dayNum}/>)
    const WeatherCard = () => {
        return(
        <Card sx={{
            border:'none',
            borderRadius:theme.spacing(2),
            boxShadow:'none',
            margin: theme.spacing(),
        }}>
            <Stack sx={{
                alignItems: 'center',
                padding: theme.spacing()
            }}>
                <AcUnitOutlined/>
            </Stack>
            <CardContent>
                <Typography variant='h6'>
                    16°C / 20°C
                </Typography>
                <Typography sx={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    Mon
                </Typography>
            </CardContent>
        </Card>
        )}
    return(
        <Container
                   sx={{
                    paddingTop: theme.spacing(2)
                   }}>
            <Stack spacing={8}
                    sx={{
                        p:theme.spacing(),
                        alignItems:'center',
                        flexDirection:'row'
                    }}>
                <WeatherCard/>
            </Stack>
        </Container>
    )
}

