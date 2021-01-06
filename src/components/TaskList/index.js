import { h } from "preact";
import { Grid, Typography, Box } from "@material-ui/core";
import * as _ from "lodash";
import TaskItem from "../TaskItem";

const TaskList = (props) => {
    const { tasks, status } = props;

    return (
        <Grid key={status.value} item md={4} xs={12}>
            <Box mt={1} mb={1}>
                <Typography component="div">{status.label}</Typography>
            </Box>
            {_.map(tasks, (task) => (
                <Box mb={1}>
                    <TaskItem data={task} />
                </Box>
            ))}
        </Grid>
    );
};

export default TaskList;
