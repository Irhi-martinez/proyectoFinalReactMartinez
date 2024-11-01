import { db } from "../firebase"; 
import { collection, addDoc } from "firebase/firestore";

/**
 * 
 * @param {*} collectionName nombre de la colección
 * @param {*} categories array de categorías a añadir
 */
export async function createCategoriesFirestore(collectionName, categories) {
    try {
        const categoriesCollection = collection(db, collectionName);

        const addPromises = categories.map((category) => {
            return addDoc(categoriesCollection, { 
                ...category,
                createdAt: new Date(), 
            });
        });

        await Promise.all(addPromises); 
        console.log(`${categories.length} categorías añadidas a Firestore.`);
    } catch (err) {
        console.error("Error al almacenar categorías:", err);
    }
}
