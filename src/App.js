import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const darkStyle = {
    color: 'white',
    backgroundColor: 'black'
  }
  const showAlert = (message)=>{
    setAlert(message)

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light mode has been enabled")
    }
  }
  return (
    <>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div className="container" id='container2'>
          <Alert mode={mode} alert={alert}/>
          <Textform mode={mode} showAlert={showAlert}/>
        </div>
    </>
  );
}
export default App;
