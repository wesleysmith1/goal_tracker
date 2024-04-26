import store from './store/store';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Container, CssBaseline } from '@mui/material';
import Metrics from './pages/Metrics';
import AddMeditation from './pages/AddMeditation';
import Meditations from './pages/Meditations';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import { selectToken, clearToken } from './reducers/authSlice';
import { parseTokenFromUrl, redirectToLogin, logout, saveTokenToState, saveIdToState } from './services/authService';
import { jwtDecode } from 'jwt-decode';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const entries = useSelector((state) => state.journal.entries);
  const [tokenProcessed, setTokenProcessed] = useState(false); // State to track if the token has been processed
  const token = useSelector(selectToken);

  useEffect(() => {
    const urlToken = parseTokenFromUrl(); // Attempt to retrieve the token from the URL first
    if (!token && !urlToken) { // If there's no token in either Redux state or URL, redirect to login
      redirectToLogin();
    } else if (urlToken) {
      const decoded = jwtDecode(urlToken);
      const userId = decoded?.sub;
      dispatch(saveIdToState(userId));
      dispatch(saveTokenToState(urlToken)); // Save the token from URL to Redux state
      window.location.hash = ''; // Clear the hash from the URL
      setTokenProcessed(true);
    } else if (token) {
      setTokenProcessed(true); // If there's already a token in the Redux state, proceed
    }
  }, [dispatch, navigate, token]);

  const handleLogout = () => {
    logout();
    dispatch(clearToken());
  };

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
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
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
