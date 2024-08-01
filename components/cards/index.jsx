// Cards.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useMainContext } from 'context/MainContext';
import { Card } from 'components';

const Cards = () => {
  const { cardTag } = useMainContext();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cache, setCache] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        // Fetch data only if cache is empty
        if (cache.length === 0) {
          const querySnapshot = await getDocs(
            collection(db, 'resources/All/items')
          );
          const resourcesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setResources(resourcesData);
          setCache(resourcesData); // Store in cache
        } else {
          setResources(cache); // Use cached data
        }
      } catch (error) {
        console.error('Error fetching resources: ', error);
      }
      setLoading(false);
    };

    fetchResources();
  }, [cache]);

  const filteredCards =
    cardTag === 'All'
      ? resources
      : resources.filter((card) => card.tab === cardTag);

  const handleLikeToggle = async (id, currentLikes, isLiked) => {
    const resourceRef = doc(db, `resources/All/items`, id);
    const newLikes = isLiked ? currentLikes - 1 : currentLikes + 1;

    await updateDoc(resourceRef, {
      likes: newLikes,
    });

    setResources((prevResources) =>
      prevResources.map((resource) =>
        resource.id === id
          ? { ...resource, likes: newLikes, isLiked: !isLiked }
          : resource
      )
    );
  };

  if (loading) {
    return (
      <main className="container mx-auto mt-16 flex gap-10">
        <div className="grid w-full grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto mt-16 flex gap-10">
      <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {filteredCards.map((card) => (
          <Card key={card.id} {...card} onLikeToggle={handleLikeToggle} />
        ))}
      </div>
    </main>
  );
};

export default Cards;

const SkeletonCard = () => {
  return (
    <div className="flex w-full animate-pulse flex-col items-center rounded-lg bg-gray-200 p-4">
      <div className="mb-4 h-40 w-full rounded-md bg-gray-300"></div>
      <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
      <div className="h-4 w-2/4 rounded bg-gray-300"></div>
    </div>
  );
};
