import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';

function App() {
  return (
    <Router>
      <Menu />
      
      <h1>JonasDrawsCats</h1>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/paintings_2024" element={<Gallery folder='paintings' year='2024' number='1' />} />
        <Route path="/paintings_2025" element={<Gallery folder='paintings' year='2025' number='2' />} />

        <Route path="/drawings_2024" element={<Gallery folder='drawings' year='2024' number='8' />} />
        <Route path="/drawings_2025" element={<Gallery folder='drawings' year='2025' number='13' />} />

        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;
