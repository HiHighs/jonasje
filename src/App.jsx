import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Menu from './components/menu';
// import Home from './pages/Home';
// import Paintings from './pages/Paintings';
// import Drawings from './pages/Drawings';
// import About from './pages/About';

function App() {
  return (
    <>
      <Menu />

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/drawings" element={<Drawings />} />
        <Route path="/about" element={<About />} />
      </Routes> */}

      <h1>JonasDrawsCats</h1>
    </>
  );
}

export default App;
