import {useMemo, useState} from "react";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";
import ColorModeContext from "./ColorModeContext";
import App from "./App";

export default function ToggleColorMode() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [mode, setMode] = useState(prefersDarkMode ? 'dark' : 'light');
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((previousMode) => (previousMode === 'light') ? 'dark' : 'light');
        }
    }), []);
    const theme = useMemo(() => createTheme({
        palette: {mode}
    }), [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}