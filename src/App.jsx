import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase/Config";
import { useEffect, useState } from "react";
import { ItemDetail } from "./Pages/ItemDetail";
import { CartProvider } from "./context"; 
import { CartContext } from "./context";
import { Checkout } from "./Pages";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductsData(productsList);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer products={productsData} />}
        />
        <Route
          path="/category/:slug"
          element={<ItemListContainer products={productsData} />}
        />
        <Route
          path="/item/:id"
          element={<ItemDetail products={productsData} />}
        />
        <Route
          path="/CartContext"
          element={<CartContext />} 
        />
        <Route path="/checkout"
         element={<Checkout />}
         />
      </Routes>
    </CartProvider>
  );
};

export default App;
