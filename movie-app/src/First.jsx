import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult.jsx";

export default function First() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:searchTerm" element={<SearchResult />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
