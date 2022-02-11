import './App.css';
import Home from "./pages/Home/home";
import Play from "./pages/Play/play";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/play">Play</Link>
          <Routes>
              <Route path='/' element={ <Home/>}/>
              <Route path='/play' element={ <Play/>}/>
          </Routes>
      </ BrowserRouter>
  );
}

export default App;
