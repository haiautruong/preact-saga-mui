import { h } from "preact";
import { Button, Grid } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import * as _ from "lodash";
import { STATUS } from "../../constants";
import TaskList from "../../components/TaskList";

const listTask = [
    {
        id: 0,
        title: "Read Book",
        status: 0,
    },
    {
        id: 1,
        title: "Play Badminton",
        status: 1,
    },
    {
        id: 2,
        title: "Learn Something",
        status: 2,
    },
    {
        id: 3,
        title: "Play Game",
        status: 2,
    },
];

const TaskBoard = () => {
    const renderBoard = () => {
        return (
            <Grid container spacing={2}>
                {_.map(STATUS, (status) => {
                    const tasks = _.filter(listTask, (t) =>
                        _.isEqual(t.status, status.value)
                    );

                    return (
                        <TaskList
                            key={status.value}
                            tasks={tasks}
                            status={status}
                        />
                    );
                })}
            </Grid>
        );
    };

    return (
        <div>
            <Button variant="contained" color="primary">
                <AddIcon />
                Add New
            </Button>
            {renderBoard()}
        </div>
    );
};

export default TaskBoard;
