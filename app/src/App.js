import logo from './logo.svg';
import './App.css';
import MainPage from './pages/MainPage.js';
// import { Router } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
 


function App() {
  return (
    
    <div className="App">
    <Router>
      <MainPage/>
    </Router>
        
    </div>
    
  );
}

export default App;
