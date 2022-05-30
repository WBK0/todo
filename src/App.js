import React from 'react';
import './App.css';
import TasksForm from './components/taskForm/form';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TasksList from './components/taskList/tasks';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className='main'>
            <TasksForm />
            <TasksList />
          </div>
        </Grid>
      </Grid>
      </Container> 
    </>
  );
}

export default App;
