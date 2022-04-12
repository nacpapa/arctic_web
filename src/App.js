import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Home from "./components/pages/Home";
import Records from "./components/pages/Records";
import Members from "./components/pages/Members";
import SignUp from "./components/pages/SignUp";
import RecordRender from "./components/pages/record/RecordRender";
import ShowRender from "./components/pages/shows/ShowRender";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/members" element={<Members />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/record" element={<RecordRender />}></Route>
          <Route path="/show" element={<ShowRender />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
