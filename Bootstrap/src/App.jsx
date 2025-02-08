import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); // Light or dark mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  };



  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        
        <div className="container">
          <Routes>
            <Route
              exact
              path="/about"
              element={<About mode={mode} />}
            />
            <Route
              exact
              path="/"
              element={<TextForm id="textform" showAlert={showAlert} title="Write a note in TextArea:" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
  
}

export default App;
