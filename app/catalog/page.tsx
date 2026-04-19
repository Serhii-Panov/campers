'use client';

import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchCampers } from '@/services/api';
import { Sidebar } from '@/components/Sidebar';
import { CamperCard } from '@/components/CamperCard';
import { CamperListItem, CamperFilters } from '@/types/camper';

export default function CatalogPage() {
  const [filters, setFilters] = useState<CamperFilters>({});

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ['campers', filters], // ВАЖЛИВО: запит перезапуститься при зміні фільтрів
    queryFn: ({ pageParam = 1 }) => fetchCampers(pageParam, 4, filters),
    getNextPageParam: (lastPage) => 
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  });

  const handleSearch = (newFilters: CamperFilters) => {
    const cleanFilters = Object.fromEntries(
      Object.entries(newFilters).filter(([_, v]) => v !== '' && v !== null)
    );
    setFilters(cleanFilters);
  };

  return (
    <main className="container mx-auto px-16 py-10 flex gap-16">
      <Sidebar onSearch={handleSearch} />

      <section className="grow">
        <div className="flex flex-col gap-8">
         {data?.pages.map((page, pageIndex) => (
    <React.Fragment key={pageIndex}>
      {page.campers?.map((camper: CamperListItem) => (
        <CamperCard key={camper.id} camper={camper} />
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