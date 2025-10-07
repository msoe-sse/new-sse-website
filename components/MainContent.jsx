import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";

export default function MainContent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
