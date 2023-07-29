import "./index.css";
import Bar from "./componets/Bar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Project from "./componets/Project";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    document.title = "Deepanshu.dev";
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<h1>contact</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
