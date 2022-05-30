import React from 'react';
import './App.css';
import Tasks from './components/taskList/tasks';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <div className='main'>
            <Tasks />
          </div>
        </Grid>
      </Grid>
      </Container> 
    </>
  );
}

export default App;
