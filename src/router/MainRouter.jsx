import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ItemDetail, Checkout, Category } from "../Pages";
import { NavBar } from "../components";
import { CartContext } from "../context";

export const MainRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/Category/:id" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="CartContext" element={<CartContext/>} />
      </Routes>
    </Router>
  );
};
