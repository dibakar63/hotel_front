import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './modules/pages/Home';
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import {Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import About from './modules/pages/About';
import Services from './modules/pages/Services';
import Rooms from './modules/pages/Room';
import Contact from './modules/pages/Contact';
//import { DarkModeSwitch } from './components/Navbar/Navbar2';
import SimpleSlider from './modules/pages/Slider';
import Book from './modules/pages/Book';
import Teams from './modules/pages/Team';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Book/>}/>
        <Route path='/team' element={<Teams/>}/>
        <Route path='/testimonial' element={<SimpleSlider/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
