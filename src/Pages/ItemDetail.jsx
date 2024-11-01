import React from 'react';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import {useProductsById} from "../hooks";
import { useParams } from 'react-router-dom';

export const ItemDetail = ({}) => { 
  const { id } = useParams();
  const { product, loading, error } = useProductsById(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ItemDetailContainer item={product}  /> 
  );
};
