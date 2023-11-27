import './App.css';
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
     <Homepage/>
      <Routes>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
