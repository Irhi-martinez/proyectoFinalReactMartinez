import React, {useState,useEffect} from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const useProductsByCategory = (id) => {
  const [productsData, setProductsData] = useState(true);
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(false);
    const customQuery = query(
      collection(db, "products"),
      where("category", "==", id)
    );

    getDocs(customQuery)
      .then((snapshot) => {
        console.log("Snapshot Docs:", snapshot.docs);
        setProductsData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { productsData, loading,error}; 
};
