'use client';

import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/api';
import { Sidebar } from '@/components/Sidebar';
import { Button } from '@/components/Button';
import { CamperListItem } from '@/types/camper';

export default function CatalogPage() {
  const [filters, setFilters] = useState({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['campers', filters], // ВАЖЛИВО: запит перезапуститься при зміні фільтрів
    queryFn: ({ pageParam = 1 }) => fetchCampers(pageParam, 4, filters),
    getNextPageParam: (lastPage) => 
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const handleSearch = (newFilters: any) => {
    // Очищаємо порожні значення перед пошуком
    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([_, v]) => v !== '' && v !== null)
    );
    setFilters(cleanFilters);
  };

  return (
    <main className="container mx-auto px-16 py-10 flex gap-16">
      <Sidebar onSearch={handleSearch} />

      <section className="flex-grow">
        <div className="flex flex-col gap-8">
          {data?.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.campers.map((camper: CamperListItem) => (
                <div key={camper.id} className="p-6 border rounded-[20px] border-gray-light flex gap-6 bg-white">
                  {/* Зображення */}
                  <div className="w-[290px] h-[310px] shrink-0 rounded-[10px] overflow-hidden">
                    <img src={camper.coverImage} alt={camper.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Контент */}
                  <div className="flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-bold text-main">{camper.name}</h2>
                      <span className="text-2xl font-bold text-main">€{camper.price.toFixed(2)}</span>
                    </div>
                    
                    {/* Рейтинг та Локація */}
                    <div className="flex gap-4 mb-6 text-sm">
                      <span>⭐ {camper.rating} ({camper.totalReviews} Reviews)</span>
                      <span>📍 {camper.location}</span>
                    </div>

                    <p className="text-text mb-6 line-clamp-2">{camper.description}</p>

                    {/* Посилання на деталі (нова вкладка за ТЗ) */}
                    <div className="mt-auto">
                      <a 
                        href={`/catalog/${camper.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button>Show more</Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>

        {/* Кнопка Load More за ТЗ */}
        {hasNextPage && (
          <div className="flex justify-center mt-12">
            <button 
              onClick={() => fetchNextPage()} 
              disabled={isFetchingNextPage}
              className="px-10 py-4 border border-gray-light rounded-full font-medium hover:border-grey-green transition-all"
            >
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}