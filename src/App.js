import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About1 from './components/About1';
import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleButton = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'darkgrey';
      showAlert('Dark mode has been enabled', 'danger');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="Menu" aboutus="About Us" mode={mode} toggleButton={toggleButton} />
        <Alert alert={alert} />
        <div className="container my-4">
          {/* <Switch>
            <Route path="/about1">
              <About1 />
            </Route>

            <Route path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
