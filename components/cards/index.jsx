// Cards.js
import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { useMainContext } from 'context/MainContext';
import { Card } from 'components';
import { useApiContext } from 'context/ApiContext';

const Cards = () => {
  const { cardTag } = useMainContext();

  const { resources, setResources } = useApiContext();
  const [loading, setLoading] = useState(true);
  const [cache, setCache] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        if (cache.length === 0) {
          // Query to fetch documents ordered by date (ascending)
          const q = query(
            collection(db, 'resources/All/items'),
            orderBy('date', 'asc') // 'asc' for oldest first, 'desc' for newest first
          );
          const querySnapshot = await getDocs(q);
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
          <Card key={card.id} {...card} onLikeToggle={handleLikeToggle} cardTag={cardTag} />
        ))}
      </div>
    </main>
  );
};

export default Cards;

const SkeletonCard = () => {
  return (
    <div
      className={`group w-full space-y-3 overflow-x-hidden rounded-xl border-2 border-border bg-transparent p-3 shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-4 lg:p-5`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-16 w-full items-center">
          <div className="rounded-xl bg-slate-50 p-1 dark:bg-transparent">
            {/* Image skeleton */}
            <div className="h-12 w-12 animate-pulse rounded-lg bg-gray-200"></div>
          </div>
          <h4 className="ml-2 w-full text-lg font-semibold text-primary md:ml-3 md:text-xl">
            {/* Label skeleton */}
            <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200"></div>
          </h4>
        </div>
      </div>
      <div className="space-y-3">
        <p className="mb-5 text-base !leading-tight text-muted line-clamp-2 md:text-base">
          {/* Description skeleton */}
          <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
        </p>
        <div className="flex items-center space-x-2">
          {/* Hashtags skeleton */}
          <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-1/4 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {/* Button skeleton */}
        <div className="h-10 w-full animate-pulse rounded bg-gray-200"></div>
      </div>
    </div>
  );
};
