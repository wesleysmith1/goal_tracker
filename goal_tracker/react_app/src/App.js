import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path as necessary
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import About from './pages/About'; // Assume we have an About component
import GoalComponent from './components/GoalComponent'; // Adjust the path as necessary
import AddGoal from './pages/AddGoal';
import Goals from './pages/Goals';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/goals">Goals</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<AddGoal />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
