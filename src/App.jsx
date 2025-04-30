import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Menu />
      
      <h1>JonasDrawsCats</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </Router>
  );
}

export default App;
