import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home/Home";
import EcoCore from "./pages/EcoCore/EcoCore";
import Angebote from "./pages/Angebote/Angebote";
import Referenzen from "./pages/Referenzen/Referenzen";
import FAQ from "./pages/FAQ/FAQ";
import Kontakt from "./pages/Kontakt/Kontakt";
import './App.css';

// basename="/ecocore"

function App() {
  return (
    <Router basename="/ecocore">
      <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="ecocore" element={<EcoCore />} />
      <Route path="angebote" element={<Angebote />}/>
      <Route path="referenzen" element={<Referenzen />}/>
      <Route path="FAQ" element={<FAQ />}/>
      <Route path="kontakt" element={<Kontakt />}/>
      </Routes>
    </Router>
  );
}

export default App;
