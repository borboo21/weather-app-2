import React from 'react';
import {Card, CardContent, CardMedia, Container, Grid, Stack, Typography} from '@mui/material';
import theme from '../../theme';
import {AcUnitOutlined} from "@mui/icons-material";

export function ForecastWeather() {
    const fwCards = [1,2,3,4]
    return(
        <Container
                   sx={{
                    paddingTop: theme.spacing(2)
                   }}>
            <Grid container spacing={8}>
                {fwCards.map((fwCard) => (
                    <Grid item key = {fwCard}>
                    <Card sx={{
                        border:'none',
                        boxShadow:'none',
                    }}>
                        <Stack sx={{
                            display: 'flex',
                            alignItems: 'center',
                            paddingTop:'8px'
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
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

