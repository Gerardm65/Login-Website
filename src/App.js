import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import logo from "./imgs/logonext.jpg"

import './App.css';

function App() {
 
  
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const [crossEye, setCrossEye] = useState(false);
    const toggleCrossEye = () => setCrossEye(!crossEye);
  return (
    <div className="App">
      
      <header className="App-header">
    
      <div className='glass__container'></div>
        
        <div className="Login__Container">
        
        <form action="#" method="POST" className='Form__container'>
        <img src={logo} alt="Logo" />
        <div  className="Input__container">
        <input id="Username" type="text" placeholder="Username" required minLength={6} maxLength={16} title="El usuario debe tener al menos 6 Caracteres"></input><br/>
        </div>
        {/* <label htmlFor="Password"> Password:</label><br/> */}
        <div className="Input__container">
        <input type={showPassword ? 'text' : 'password'} id="Password" placeholder="Password" required title="This field is required, the password should has Numbers letters and special characters"minLength={6} maxLength={16}/>
        
        <button id="showpassword" type="button" onClick={togglePasswordVisibility}>{crossEye ? <FiEye onClick={toggleCrossEye}/> : <FiEyeOff onClick={toggleCrossEye}/>}</button><br/>
        </div>
       

        <div className="button__container">
        <button id="login__button" type="submit">Entrar</button>
        
        </div>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
