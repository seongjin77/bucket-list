import React from "react";
import { TodoLi } from "./TodoContentStyle";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import EditIcon from '@mui/icons-material/Edit';
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const TodoContent = ({ item }) => {
    console.log(item);
    const [checked, setChecked] = useState([]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <TodoLi
            secondaryAction={
              <>
                <IconButton edge="end" aria-label="comments">
                  <EditIcon/>
                </IconButton>
                <IconButton edge="end" aria-label="comments">
                  <DeleteOutlineRoundedIcon/>
                </IconButton>
              </>
            }
            
            disablePadding
        >
            <ListItemButton
                role={undefined}
                onClick={handleToggle(item.id)}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(item.id) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": item.id }}
                    />
                </ListItemIcon>
                <ListItemText id={item.id} primary={`${item.todo}`} />
            </ListItemButton>
        </TodoLi>
    );
};

export default TodoContent;
