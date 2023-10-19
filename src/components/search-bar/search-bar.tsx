import React from "react";
import {Stack, TextField, Typography} from "@mui/material";
import theme from "../../theme";

export function SearchBar() {
    return(
        <Stack sx={{
            direction: "row",
            justifyContent: "center",
            fontWeight: "medium",
            alignItems: "center",
            margin: theme.spacing(1),
            marginTop: theme.spacing(25),
        }}>
            <Typography id="weatherStatus"
                sx={{
                    fontSize: "h6.fontSize",
                    letterSpacing: theme.spacing(1),
            }}>Right now in
            <TextField id="searchInput"
                       variant="standard"
                       sx={{
                           input: {textAlign: "center",
                           fontSize: "h6.fontSize",
                           padding: theme.spacing(0.25),
                           letterSpacing: theme.spacing(0.25),
                           color: theme.palette.primary.main},
                           width: theme.spacing(15),
                           marginX: theme.spacing(0.5),
                       }}
                        ></TextField>
                ,good weather</Typography>
        </Stack>
    )
}

export default SearchBar;