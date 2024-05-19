import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert.js';
import { Routes, Route } from "react-router-dom";



function App() {
  const [mode,setmode] = useState('light');
  const [switchText, setswitchText] = useState('Enable Dark Mode');
  const [alert , setAlert] = useState(null);

  const showAlert= (message , type)=>{
    setAlert({
      message : message,
      type: type
    }) 
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const togglemode = ()=>{
    if(mode==='light'){
      setmode("dark");
      setswitchText("Ambient Mode");
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark Mode has been enabled" , "success ");
      document.title="TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = "TextUtils is amazing!"
      // }, 1000);
      // setInterval(() =>{
      //   document.title = "Install TextUtils!"
      // }, 1500);
    }
      
    else{
      setmode("light");
      setswitchText("Dark Mode");
      document.body.style.backgroundColor = '#93edeb';
      showAlert(" Light Mode has been enabled" , "success ");
      document.title="TextUtils - Ambient Mode";
      
    }
      
  }
  return (
    <>
    <Navbar title="Home" about="About Us" switchText={switchText} mode={mode} togglemode={togglemode}/>
    <Alert Alert = {alert}/>
    <div className="container my-3">
    {/* <TextForm showAlert={showAlert} heading="Vivek Conversion Engine" mode={mode} />
    <About heading="About Us" mode={mode}/>  */}
    <Routes>                     
            <Route exact path="TextForm" element = { <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter | Character Counter" mode={mode} /> }  /> 
            <Route exact path="About" element = { <About heading="About Us" mode={mode}/> }  />
            {/* <Route exact path="Home" element = { <Home heading="This is Our Home" /> }  /> */}
    </Routes> 
    </div> 
      
    </>
  );
}

export default App;
