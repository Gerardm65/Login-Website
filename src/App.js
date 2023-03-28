import { useState } from 'react';
import { FiEye, FiEyeOff, FiUser} from 'react-icons/fi';
import logo from "./imgs/logonext.jpg"

import './App.css';

function App() {
 
  
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const [crossEye, setCrossEye] = useState(false);
    const toggleCrossEye = () => setCrossEye(!crossEye);
    
    const [ isPressed, setIsPressed] = useState(false);
  const handleMouse = { handleMouseDown: () =>{ setIsPressed(true); }, handleMouseUp: () =>{setIsPressed(false); }, handleMouseLeave: () =>{ setIsPressed(false)}
  }

  return (
    <div className="App">
      
      <header className="App-header">
    
      <div className='glass__container'></div>
        
        <div className="Login__Container">
        
        <form action="#" method="POST" className='Form__container'>

          <div className='Image__container'>
            <img src={logo} alt="Logo" />
            </div>

        <div  className="Input__container">
        <div className='user__logo__container'>
        <input id="Username" type="text" placeholder="   Email" required minLength={6} maxLength={16} title="El usuario debe tener al menos 6 Caracteres"></input><br/>
        <div className='user__logo'>
          <FiUser/>
          </div>
          </div>
        
        <div className='Input__password'>
        <input type={showPassword ? 'text' : 'password'} id="Password" placeholder="   Password" required title="This field is required, the password should has Numbers letters and special characters"minLength={6} maxLength={16}/>
        <div className='toggle__container'>
        <button id="showpassword" type="button" onClick={() => {
            togglePasswordVisibility();
            toggleCrossEye();
            }}>
              {crossEye ? <FiEye/> : <FiEyeOff/>}
              </button><br/>
              </div>
              </div>
        </div>
       

        <div className="button__container">

        <button id="login__button" type="button" 
        onMouseDown={handleMouse.handleMouseDown}
         onMouseUp={handleMouse.handleMouseUp} 
         onMouseLeave={handleMouse.handleMouseLeave} 
         className={`Button ${isPressed ? 'buttonScaleAnimation' : ''}`}>
          Entrar
          </button>
         
        </div>
        <div className='signup__container'>
         <span ><a href='#' className='signup'>No Account? Sign up Here!</a></span>
         </div>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
