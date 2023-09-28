import Home from './pages/Homepage/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <> 
    <Navbar/>
    <BrowserRouter>
    <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>

      </Routes>
    </BrowserRouter>
     
    </>
  );
}

export default App;
