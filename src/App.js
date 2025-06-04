import { BrowserRouter as Router, Routes, Route } from "react-router"
import Home from "./pages/Home/Home";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
