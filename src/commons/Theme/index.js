import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4527a0",
        },
        secondary: {
            main: "#7e57c2",
        },
        error: {
            main: "#c62828",
        },
    },
    typography: {
        fontFamily: "Roboto",
    },
});

export default theme;
