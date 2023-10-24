import React, {useEffect, useRef, useState} from "react";
import {Stack, TextField, Typography} from "@mui/material";
import theme from "../../theme";

export function SearchBar() {

    const [value, setValue] = useState("");
    const [width, setWidth] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = ref.current as HTMLElement;
        if (!el) return;
        setWidth(el.offsetWidth)
    },[value])

    return(
        <Stack direction="row"
            sx={{
            justifyContent: "center",
            fontWeight: "medium",
            alignItems: "center",
        }}>
            <Typography id="weatherStatus"
                sx={{
                    fontSize: "h6.fontSize",
                    letterSpacing: theme.spacing(),
            }}>Right now in
            <TextField id="searchInput"
                       variant="standard"
                       onChange={(e) => {
                           setValue(e.target.value)
                       }}
                       sx={{
                           input: {textAlign: "center",
                           fontSize: "h6.fontSize",
                           padding: theme.spacing(0.5),
                           letterSpacing: theme.spacing(0.25),
                           color: theme.palette.primary.main},
                           minWidth: theme.spacing(15),
                           width: `${width + 8}px`,// + paddings
                           maxWidth: theme.spacing(100),
                           marginX: theme.spacing(0.5),
                       }}
                        ></TextField>
                ,good weather</Typography>
            <Stack ref={ref}
            sx={{
                position:"absolute",
                opacity:0,
                pointerEvents: "none"
            }}>{value}</Stack>
        </Stack>
    )
}

export default SearchBar;