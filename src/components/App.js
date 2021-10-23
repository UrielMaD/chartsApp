import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Routes from '../routes/Routes';
import '../styles/app.css';

function App() {
  const [activeChart, setActiveChart] = useState('/histogram')
  
  return (
    <Router>
      <div className="app">
        <div className="navBar">
          <ul className="horizontal">
            <li>
              <Link 
                className={activeChart === "/histogram" ? "activeLink": "link" } 
                to="/histogram"
                onClick={() => setActiveChart('/histogram')}
              >
                Histogram
              </Link>
            </li>
            <li>
              <Link 
                className={activeChart === "/heatmap" ? "activeLink": "link" } 
                to="/heatmap"
                onClick={() => setActiveChart('/heatmap')}
              >
                Heatmap
              </Link>
            </li>
            <li>
              <Link 
                className={activeChart === "/wordcloud" ? "activeLink": "link" } 
                to="/wordcloud"
                onClick={() => setActiveChart('/wordcloud')}
              >
                Wordcloud
              </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
