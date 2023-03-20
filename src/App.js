import { useState } from 'react';
import { FiEye } from 'react-icons/fi';

import './App.css';

function App() {
 
  
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);
  return (
    <div className="App">
      <header className="App-header">
        <div className="Login__Container">
        <form action="#" method="POST">
        <label htmlFor="Username">Username:</label> <br/>
        <input id="Username" type="text" placeholder="Username" required minLength={6} maxLength={16} title="El usuario debe tener al menos 6 Caracteres"></input><br/>
        <label htmlFor="Password"> Password:</label><br/>
        <input type={showPassword ? 'text' : 'password'} id="Password" placeholder="Password" required title="This field is required, the password should has Numbers letters and special characters"minLength={6} maxLength={16}/>
        <button id="showpassword" type="button" onClick={togglePasswordVisibility}><FiEye/></button><br/>
        <span>The password should have at least 8 characters </span>

        <div className="button__container">
        <button id="login__button" type="submit"> Log in</button>
        <button id="sign__in__button" type="submit">Sign in</button>
        </div>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
