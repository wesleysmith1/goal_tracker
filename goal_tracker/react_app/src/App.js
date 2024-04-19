import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, CssBaseline } from '@mui/material';
import About from './pages/About';
import AddGoal from './pages/AddGoal';
import Goals from './pages/Goals';
import ActualAbout from './pages/ActualAbout';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <AppBar position="static" color="primary" style={{ marginBottom: '20px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Application
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/goals">Goals</Button>
            <Button color="inherit" component={Link} to="/actualabout">About Us</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<AddGoal />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/actualabout" element={<ActualAbout />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
