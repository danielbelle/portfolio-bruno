import "./App.css";
import ProjectBlog from "./Pages/ProjectBlog";
import Home from "./Pages/Home";
import Nav from "./Components/Nav";
import DetailProject from "./Pages/DetailProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
      <Router>
        <Nav />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/projects" element={<ProjectBlog />} />
          <Route path="/project/:id" element={<DetailProject />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
