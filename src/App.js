import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router basename='/demo'>
      <Routes>
        <Route path='/demo' element={<Homepage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
