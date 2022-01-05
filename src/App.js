
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import React, { useState } from 'react'
import Alert from './component/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [icon, seticon] = useState(<i class="far fa-moon"></i>)
  const [alert, setalert] = useState(null)

  const showalert =(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor='#2d3436';
      document.body.style.color='white';
      seticon(<i class="fas fa-moon"></i>)
      showalert("Dark mode is enable","success")
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      seticon(<i class="far fa-moon"></i>)
      showalert("light mode is enable","success")
    }
  }
  return (
    <>
       <Navbar page1="Home" page2="About us" mode={mode} toggleMode={toggleMode} icon={icon}/>
       <Alert alert={alert}/>
       <Textform mode={mode} />
       {/* <About/> */}
    </>
  );
}

export default App;
