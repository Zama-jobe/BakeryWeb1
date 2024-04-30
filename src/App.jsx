import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./about";
import HomePage from "./home";
import MenuPage from "./MenuPage";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
