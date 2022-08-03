import {AppBar, Box, IconButton, Toolbar, Typography, useTheme} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import {DarkMode, LightMode} from "@mui/icons-material";
import {useContext} from "react";
import ColorModeContext from "./ColorModeContext";

function TopBar(props) {
    const theme = useTheme()
    const colorModeContext = useContext(ColorModeContext);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h3" component="div" sx={{flexGrow: 1}}>
                        MLB the Show PXP Calculator
                    </Typography>
                    <IconButton
                        onClick={props.onInfoIconClicked}
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="info"
                        sx={{mr: 2}}>
                        <InfoIcon/>
                    </IconButton>
                    <IconButton
                        onClick={colorModeContext.toggleColorMode}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="color-mode"
                        sx={{mr: 2}}>
                        {theme.palette.mode === 'dark' ? <DarkMode/> : <LightMode/>}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopBar;