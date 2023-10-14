import React from "react";
import {Box, TextField, Typography} from "@mui/material";

export function SearchBar() {
    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "medium",
            alignItems: "center",
            margin: "5px",
            marginTop: "200px",
        }}>
            <Typography id="weatherStatus"
                sx={{
                    fontSize:"h6.fontSize",
                    letterSpacing:'2px',
                    color: "gray"
            }}>Right now in
            <TextField id="searchInput"
                       variant="standard"
                       sx={{
                           input: {textAlign: "center",
                           fontSize:"h6.fontSize",
                           padding:"2px",
                           letterSpacing:'2px',
                           color:"#545454"},
                           width: "120px",
                           marginX:"5px",
                       }}
                        ></TextField>
                , good weather</Typography>
        </Box>
    )
}

export default SearchBar;