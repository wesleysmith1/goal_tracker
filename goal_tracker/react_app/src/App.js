import React from 'react';
import { Provider } from 'react-redux';
import store from './store'; // Adjust the path as necessary
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import TextInputWithSubmit from './components/TextInputWithSubmit'; // Adjust the path as necessary
import About from './pages/About'; // Assume we have an About component

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
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextInputWithSubmit />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
