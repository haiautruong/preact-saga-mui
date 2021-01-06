import { h } from "preact";
// import { Router } from "preact-router";
import { withStyles } from "@material-ui/core/styles";
import { style } from "../style";

const App = (props) => (
    <div className={props.classes.root} id="app">
        Hello
    </div>
);

export default withStyles(style)(App);
