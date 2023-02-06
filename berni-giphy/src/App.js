import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './Profile';
import logo from './logo.svg';
import './App.css';
import { LogoutButton } from './Logout';
import { LoginButton } from './Login';

function App() {
  const {isAuthenticated} = useAuth0();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
        <> 
        
        <LogoutButton />
        <Profile />
        </>
   ) : (
        <LoginButton />
   )}
      </header>
    </div>
  );
}

export default App;
