import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection.js';
import AboutBand from './components/AboutBand.js';
import MusicSection from './components/MusicSection.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutBand />
      <MusicSection />
      <Footer></Footer>
    </div>
  );
}

export default App;
