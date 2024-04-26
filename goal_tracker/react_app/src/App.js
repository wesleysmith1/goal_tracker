import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, CssBaseline } from '@mui/material';
import Metrics from './pages/Metrics';
import AddMeditation from './pages/AddMeditation';
import Meditations from './pages/Meditations';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <AppBar position="static" color="primary" style={{ marginBottom: '20px' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Meditation Zone
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/addmeditation">Add Meditation</Button>
            <Button color="inherit" component={Link} to="/meditations">Meditations</Button>
            <Button color="inherit" component={Link} to="/metrics">Metrics</Button>
            <Button color="inherit" component={Link} to="/aboutus">About Us</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addmeditation" element={<AddMeditation />} />
            <Route path="/meditations" element={<Meditations />} />
            <Route path="/metrics" element={<Metrics />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
