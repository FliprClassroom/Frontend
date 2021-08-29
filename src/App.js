import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import MainPage from './pages/MainPage/MainPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <LandingPage/> */}
        <MainPage/>
      </div>
    </BrowserRouter>
  );
}

export default App;
