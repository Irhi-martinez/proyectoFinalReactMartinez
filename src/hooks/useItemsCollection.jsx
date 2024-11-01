import React, { useEffect, useState } from "react";
import { collection, getDocs} from "firebase/firestore";
import { db } from "../firebase";


export const useItemsCollection = (categoryName) => {
    const [itemsData, setItemsData] = useState([]);
    const [loading, setLoading] = useState(true);
const [error,setError] = React.useState(false);
    useEffect(() => {
        const itemsCollection = collection(db, categoryName);
        getDocs(itemsCollection)
        .then((Snapshot) => {
            setItemsData(
                    Snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));

    }, []);
    return { itemsData, loading, error};
};