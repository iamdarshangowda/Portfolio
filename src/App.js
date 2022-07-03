import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectsList from "./components/Projects/ProjectsList";
import Skills from "./components/Skills";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsList />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
