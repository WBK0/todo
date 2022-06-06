import { Grid, Checkbox } from '@mui/material';
import React, {useEffect, useState} from 'react';
import './style.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { db, auth } from "../firebase";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const TasksList = () => {

    const tasksCollectionRef = collection(db, "tasks");

    const [tasksTodo, setTasksTodo] = useState([])

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(tasksCollectionRef);
          setTasksTodo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);

    

    return(
        <>
            <div className='tasks'>
                {tasksTodo.map((todo) => (
                <div className='task'>
                    <Grid container>
                        <Grid item xs={1}>  
                            {todo.completed
                                ?
                                    <Checkbox 
                                    aria-label='Checkbox demo' 
                                    color="success"
                                    size="large" 
                                    defaultChecked
                                    sx={{
                                        height: "50px"
                                    }}   
                                    />
                                :
                                    <Checkbox 
                                    aria-label='Checkbox demo' 
                                    color="success"
                                    size="large" 
                                    
                                    sx={{
                                        height: "50px"
                                    }}  
                                    />
                            }
                            
                        </Grid>
                        
                        <Grid item xs={9}
                        sx={{
                            margin: "auto 0"
                        }}>
                            {todo.task}
                        </Grid>

                        <Grid item xs={2}
                        sx={{
                            textAlign: "right",
                        }}>
                            <IconButton aria-label="delete" size="large">
                                <EditIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </div>
                ))}
            </div>
            
        </>
    )
}

export default TasksList