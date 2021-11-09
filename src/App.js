import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Home from "./components/pages/Home";
import Records from "./components/pages/Records";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import RoyalAlbert from "./components/pages/record/RoyalAlbert";
import Tranquility from "./components/pages/record/Tranquility";
import Am from "./components/pages/record/Am";
import SuckIt from "./components/pages/record/SuckIt";
import Humbug from "./components/pages/record/Humbug";
import FavoriteWorst from "./components/pages/record/FavoriteWorst";
import Whatever from "./components/pages/record/Whatever";
import Argentina from "./components/pages/shows/Argentina";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/records" element={<Records />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/royal-albert-hall" element={<RoyalAlbert />}></Route>
          <Route path="/tranquility-base" element={<Tranquility />}></Route>
          <Route path="/am" element={<Am />}></Route>
          <Route path="/suck-it" element={<SuckIt />}></Route>
          <Route path="/humbug" element={<Humbug />}></Route>
          <Route path="/favorite-worst" element={<FavoriteWorst />}></Route>
          <Route path="/whatever" element={<Whatever />}></Route>
          <Route path="/argentina-show" element={<Argentina />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
