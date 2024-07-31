import { useState, useEffect } from 'react';
import { collection, query, onSnapshot } from 'firebase/firestore';

const useUserSubcollections = (db, userId, collectionName) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!userId) return;

    const subcollection = collection(db, `users/${userId}/${collectionName}`);
    const q = query(subcollection);
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const itemsArr = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(itemsArr);
    });

    return () => unsubscribe();
  }, [db, userId, collectionName]);

  return items;
};

export default useUserSubcollections;
