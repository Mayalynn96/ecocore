import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home/Home";
import EcoCore from "./pages/EcoCore/EcoCore";
import './App.css';

// basename="/ecocore"

function App() {
  return (
    <Router basename="/ecocore">
      <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="ecocore" element={<EcoCore />} />
      </Routes>
    </Router>
  );
}

export default App;
