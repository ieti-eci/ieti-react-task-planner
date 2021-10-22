import { useState } from "react";

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { TaskItem } from "./TaskItem";
import TopBar from "./TopBar";
import { Button, Stack, TextField } from "@mui/material";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: true,
      name: "Learn React",
    },
    {
      isCompleted: false,
      name: "Learn Hook",
    },
    {
      isCompleted: false,
      name: "Keep on Keeping on",
    },
  ]);

  const [textValue, setTextValue] = useState("");

  const handleTaskChange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };

  const newTask = (name) => {
    const newTask = {
      isCompleted: false,
      name: name,
    };

    setTasks([...tasks, newTask]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    newTask(textValue);
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  };

  return (
    <main>
      <TopBar />
      <Stack maxWidth="xs" spacing={1} direction="column" alignItems="center" marginTop={2}>
        <form onSubmit={handleSubmit}>
          <TextField size="small" value={textValue} onChange={handleTextChange} type="text" label="Task Name" />
          <Button variant="contained" type="submit">Create Task</Button>
        </form>

        <div />
        <div />

        {tasks.map((task, index) => {
          return (
            <TaskItem isCompleted={task.isCompleted} taskName={task.name} />
          )
        })}
        <Fab color="primary" aria-label="add" sx={{ marginTop: 2, marginDown: 3 }}>
          <AddIcon />
        </Fab>
      </Stack>
    </main >
  );
}
