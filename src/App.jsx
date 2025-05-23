import './App.css';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

        <Route 
          path="/paintings_2024"
          element={
            <Gallery
              folder='paintings'
              year='2024' 
              filenames={[
                'Rainbow-house.jpg',
                'Zadar-house.jpg',
                'El-Camino-lizard.jpg',
                'Pink-flowers.jpg',
                'Beetle-on-the-trail.jpg',
                'Me.jpg',
                'Church-in-Zadar.jpg',
                'El-Camino-church.jpg',
                'Green-tea.jpg',
                'Coffee-bar.jpg',
                'Plant.jpg',
                'Bike.jpg',
                'Bar-in-Malaga.jpg',
                'Watchtower.jpg',
                'Big-tree.jpg'
              ]}
            />}
        />

        <Route 
          path="/paintings_2025"
          element={
            <Gallery
              folder='paintings'
              year='2025' 
              filenames={[
                'Greece.jpg',
                'Floridian-me.jpg',
                'Kittie-and-me.jpg',
                'Doggo.jpg',
                'Plant-store.jpg',
                'Froggy.jpg',
                'Lovely.jpg',
                'Chair-man.jpg',
                "Cats-'n-plants.jpg",
                'Piano.jpg',
                'Foxy.jpg',
                'Walk-in-the-park.jpg',
                'Cat-on-chimney.jpg',
                'Windmill.jpg',
                'Spacy-house.jpg',
                'Lighthouse.jpg',
                'Moscow.jpg',
                'Mountain-house.jpg',
                'Gnome-house.jpg',
                'Autumn-forest.jpg',
                'Deer-by-river.jpg',
                'Foxy-love.jpg',
                'Fisherman.jpg',
              ]}
            />}
        />
        
        <Route 
          path="/drawings_2024"
          element={
            <Gallery
              folder='drawings'
              year='2024' 
              filenames={[
                'Fancy-house-Menorca.jpg',
                'Trip.jpg',
                'Kitty.jpg',
                'Little street Menorca.jpg',
                'Beetle.jpg',
                'Doggy on boat.jpg',
                'Sheep in Spain.jpg',
                'Portugal high point.jpg',
              ]}
            />}
        />
        
        <Route 
          path="/drawings_2025"
          element={
            <Gallery
              folder='drawings'
              year='2025' 
              filenames={[
                'Lapland-fireplace.jpg',
                'Lapland-campfire.jpg',
                'Plantsssss.jpg',
                'Indoor.jpg',
                'Creepy-statues.jpg',
                'Hike-break.jpg',
                'Old-man.jpg',
                'Forest.jpg',
                'Plant-store.jpg',
                'Living-room.jpg',
                'Fireplace.jpg',
                'Bedroom.jpg',
                'Kitchen-home.jpg',
                'Ouch.jpg',
              ]}
            />}
        />

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
