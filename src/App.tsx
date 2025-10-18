import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Member1 from "./pages/Member1";
import Member2 from "./pages/Member2";
import Member3 from "./pages/Member3";
import Member4 from "./pages/Member4";
import Member5 from "./pages/Member5";
import About from "./pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member/1" element={<Member1 />} />
          <Route path="/member/2" element={<Member2 />} />
          <Route path="/member/3" element={<Member3 />} />
          <Route path="/member/4" element={<Member4 />} />
          <Route path="/member/5" element={<Member5 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
