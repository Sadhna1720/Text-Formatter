import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#131c3d';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Todos" aboutText="AboutTodos" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route path="/home" element={<TextForm showAlert={showAlert} heading='Play With Text' mode={mode} />}/>
            <Route path="/about" element={<About mode={mode} />}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
