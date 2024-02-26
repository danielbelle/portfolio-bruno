import "./App.css";
import Nav from "./Components/Nav";
import DetailProj from "./Pages/DetailProj";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<DetailProj />} />
      </Routes>
    </div>
  );
}

export default App;
