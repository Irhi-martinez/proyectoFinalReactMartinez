import React from "react";
import { useParams } from "react-router-dom"; 
import { useProductsByCategory } from "../hooks"; 

export const ProductsByCategory = () => {
    const { id } = useParams(); 
    const { productsData, loading } = useProductsByCategory(id); 

    if (loading) {
        return <div>Loading...</div>; 
    }

    return <ItemListContainer products={productsData} />; 
};
