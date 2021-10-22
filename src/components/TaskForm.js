import { Card, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";

export default function TaskForm() {
    const [taskName, setTaskName] = useState("");

    const SecondPage = props => {
        const location = useLocation();

        useEffect(() => {
            setTaskName(location.state.name)
        }, [location])
    }

    SecondPage()

    return (
        <div>
            <TopBar />

            <Stack direction="column" justifyContent="center" alignItems="flex-start" maxWidth="xs" sx={{ ml: 3, mt: 3 }}>
                <Typography sx={{ fontFamily: "Roboto", fontSize: 30, fontStyle: "italic" }}>Name</Typography>
                <Typography sx={{ fontSize: 22, pl: 5, fontFamily: "Roboto" }}>{taskName}</Typography>
                <Typography sx={{ fontFamily: "Roboto", fontSize: 30, fontStyle: "italic", mt: 3 }}>Description</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, fontFamily: "Roboto", mr: 50 }}>...</Typography>
                <Typography sx={{ fontFamily: "Roboto", fontSize: 30, fontStyle: "italic", mt: 3 }}>Due Date</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, fontFamily: "Roboto", mr: 50 }}>...</Typography>
                <Typography sx={{ fontFamily: "Roboto", fontSize: 30, fontStyle: "italic", mt: 3 }}>Assigned To</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, fontFamily: "Roboto", mr: 50 }}>...</Typography>
                <Typography sx={{ fontFamily: "Roboto", fontSize: 30, fontStyle: "italic", mt: 3 }}>Status</Typography>
                <Typography align="justify" sx={{ fontSize: 22, pl: 5, fontFamily: "Roboto", mr: 50 }}>...</Typography>
            </Stack>

        </div>
    );
}