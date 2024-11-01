import { ItemListContainer,Loader } from "../components";
import { useItemsCollection } from "../hooks";

export const Home = () => { 
    const {itemsData, loading} = useItemsCollection("products"); 
    return loading ? <Loader /> : <ItemListContainer products={itemsData} />; 
};

