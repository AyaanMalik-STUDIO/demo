import './App.css';
import { HashRouter as Router, Routes, Route,} from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
     <Homepage/>
      <Routes>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
