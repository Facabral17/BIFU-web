import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeroSection from './components/HeroSection.jsx';
import AboutBand from './components/AboutBand.jsx';
import MusicSection from './components/MusicSection.jsx';
import Footer from './components/Footer.jsx';

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
