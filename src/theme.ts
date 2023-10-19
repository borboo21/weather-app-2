import { createTheme } from '@mui/material';

const colors = {
    gray:"#a19f9f",
    black:"#545454"
}

const theme = createTheme({
    palette:{
        primary: {
            main: colors.black
        }
    },
    spacing:8,
    components:{
        MuiTypography:{
            defaultProps:{
                color: colors.gray
            }
        },
    }
});

export default theme;