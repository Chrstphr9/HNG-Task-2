import './App.css';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Profile/>} />
        <Route path="/contact" element={< Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
