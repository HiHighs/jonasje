import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';
import { useEffect } from 'react';

function AppContent() {
  const location = useLocation();

  // effect to set the padding to 0 the home page
  useEffect(() => {
    const root = document.getElementById('root');
    if (!root) return;

    if (location.pathname === '/') {
      root.style.padding = '0';
    } else {
      root.style.padding = '15px';
    }
  }, [location.pathname]);

  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/paintings_2024" element={<Gallery folder='paintings' year='2024' number='15' />} />
        <Route path="/paintings_2025" element={<Gallery folder='paintings' year='2025' number='23' />} />

        <Route path="/drawings_2024" element={<Gallery folder='drawings' year='2024' number='8' />} />
        <Route path="/drawings_2025" element={<Gallery folder='drawings' year='2025' number='13' />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
