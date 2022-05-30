import TextField from '@mui/material/TextField';
import React from 'react';
import './style.css';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const TasksForm = () =>{
    return(
        <>
            <h1 className='taskFormTitle'>DO ZROBIENIA</h1>
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
                    fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button 
                    variant="contained"
                    size="large" 
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
        </>
    )
}

export default TasksForm;