import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Gallery from './components/Gallery';
import About from './components/About';
import Ideas from './components/Ideas';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <Header/>
     
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="gallery" element={<Gallery/>}/>
      <Route path="ideas" element={<Ideas/>}/>
    
  </Routes>

     <Footer/>
    </div>
  );
}

export default App;
