
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Wildfire from './components/pages/projects/Wildfire';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes> 
        <Route path="/" exact Component={Home} />
        <Route path="/resume" exact Component={Resume} />
        <Route path="/projects" exact Component={Projects} />
        <Route path="/contact" exact Component={Contact} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/projects/portfolio" element={<Portfolio />} /> */}
        {/* <Route path="/projects/wildfire" element={<Wildfire />} /> */}
        {/* <Route path="/projects/quantum" element={<Quantum />} /> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
