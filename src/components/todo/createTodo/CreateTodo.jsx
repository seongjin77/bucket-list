import { Grid } from "@mui/material";
import React from "react";
import { CreateButton, TodoInput } from "./CreateStyle";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { useInput } from "../../../hooks/useInput";
import { createTodoAxios } from "../../../api/apiCreateTodo";

const CreateTodo = () => {
    const [todoValue, setTodoValue] = useInput('');

    const submitTodo = async (todo) => {
        const res = await createTodoAxios(todo)

    }

    return (
        <Grid container columnSpacing={1} sx={{ alignItems : 'center' }}>
            <Grid item xs={11}>
                <TodoInput onChange={setTodoValue} id="todo" label="할 일" variant="outlined" />
            </Grid>
            <Grid item xs={1}>
                <CreateButton onClick={submitTodo}>
                  <AddBoxOutlinedIcon color="primary"/>
                </CreateButton>
            </Grid>
        </Grid>
    );
};

export default CreateTodo;
