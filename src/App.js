import './App.css';
import PasswordEntry from './components/PasswordEntry/PasswordEntry';

function App() {
  const handlePasswordSubmit = (password) => {
    // Handle the valid password here (e.g., send it to the server)
    console.log('Valid Password:', password);
  };
  
  return (
    <div className="App">
      <h1>Password Entry Library Demo</h1>
      <PasswordEntry onSubmit={handlePasswordSubmit} />
    </div>
  );
}

export default App;
