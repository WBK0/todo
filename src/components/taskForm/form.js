import TextField from '@mui/material/TextField';
import React from 'react';
import './style.css';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useState } from 'react';


const TasksForm = () =>{
    const [task, setTask] = useState("")
    

    return(
        <>
            <h1 className='taskFormTitle'>DO ZROBIENIA</h1>
            <form >
            <Grid 
            container
            spacing={2}
            sx={{
                marginTop: "4vh",
            }}
            >
                <Grid item xs={10}>
                    <TextField 
                    id="outlined-basic" 
                    label="Co masz do zrobienia?" 
                    variant="outlined" 
                    className="addTaskInput" 
                    onChange={
                        (e) => setTask(e.target.value)
                    }
                    fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button 
                    variant="contained"
                    size="large" 
                    type="submit"
                    fullWidth 
                    endIcon={<AddIcon />}
                    sx={{
                        height: "100%",
                        
                    }}
                    >
                        Dodaj
                    </Button>
                </Grid>
               
            </Grid>
            </form>
        </>
    )
}

export default TasksForm;