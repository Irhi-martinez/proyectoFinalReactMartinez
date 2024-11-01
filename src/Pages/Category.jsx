import React from 'react';
import { useProductsByCategory} from '../hooks/useProductsByCategory';
import { ItemListContainer } from '../components';
import { useParams } from 'react-router-dom';

export const Category = () => {
  const { id } = useParams();
  const { productsData, loading, error } = useProductsByCategory(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return <ItemListContainer products={productsData} />;
};
