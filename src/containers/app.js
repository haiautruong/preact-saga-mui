import { h } from "preact";
import { withStyles, ThemeProvider } from "@material-ui/core/styles";
import { style } from "../style";
import theme from "../commons/Theme";
import TaskBoard from "./TaskBoard";

const App = (props) => (
    <ThemeProvider theme={theme}>
        <div className={props.classes.root} id="app">
            <TaskBoard {...props} />
        </div>
    </ThemeProvider>
);

export default withStyles(style)(App);
