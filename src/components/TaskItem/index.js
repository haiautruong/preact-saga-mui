import { h } from "preact";
import {
    Grid,
    Card,
    CardContent,
    CardActions,
    Typography,
    Fab,
    Icon,
} from "@material-ui/core";

const TaskItem = (props) => {
    const { title } = props.data;

    return (
        <Card>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item md={8}>
                        <Typography component="h2">{title}</Typography>
                    </Grid>
                    <Grid item md={4}>
                        {status.label}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Fab color="primary" aria-label="Edit">
                    <Icon fontSize="small">edit_icon</Icon>
                </Fab>
                <Fab color="primary" aria-label="Edit">
                    <Icon fontSize="small">delete_icon</Icon>
                </Fab>
            </CardActions>
        </Card>
    );
};

export default TaskItem;
