import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectsList from "./components/Projects/ProjectsList";
import Skills from "./components/Skills";
import Home from "./components/Home";
import About from "./components/About";
import Blogs from "./components/Blogs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<ProjectsList />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
