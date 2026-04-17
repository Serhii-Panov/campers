'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { fetchCamperById } from '@/services/api';
import { CamperGallery } from '@/components/CamperDetails/Gallery';
import { BookingForm } from '@/components/CamperDetails/BookingForm';
import { ReviewsList } from '@/components/CamperDetails/Reviews';
import { VehicleSpecs } from '@/components/CamperDetails/VehicleSpecs';

export default function CamperDetailsPage() {
  const { id } = useParams();
  
  const { data: camper, isLoading, error } = useQuery({
    queryKey: ['camper', id],
    queryFn: () => fetchCamperById(id as string),
  });

  if (isLoading) return <div className="p-20 text-center">Loading details...</div>;
  if (error || !camper) return <div className="p-20 text-center">Camper not found</div>;

  return (
    <main className="container mx-auto px-16 py-10">
      {/* Заголовок */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold text-main mb-2">{camper.name}</h1>
        <div className="flex gap-4 text-sm mb-4">
          <span className="flex items-center gap-1">⭐ {camper.rating} ({camper.totalReviews} Reviews)</span>
          <span>📍 {camper.location}</span>
        </div>
        <p className="text-3xl font-bold text-main">€{camper.price.toFixed(2)}</p>
      </section>

      {/* Галерея зображень */}
      <CamperGallery images={camper.gallery} />

      <div className="flex gap-10 mt-12">
        {/* Ліва колонка: Опис, Характеристики, Відгуки */}
        <div className="flex-grow max-w-[600px]">
          <p className="text-text leading-relaxed mb-10">{camper.description}</p>
          
          <div className="flex gap-10 border-b border-gray-light mb-10 text-xl font-bold">
            <button className="pb-6 border-b-4 border-grey-green">Features</button>
            <button className="pb-6 text-gray-400">Reviews</button>
          </div>

          <VehicleSpecs camper={camper} />
          <ReviewsList reviews={camper.reviews} />
        </div>

        {/* Права колонка: Форма бронювання */}
        <aside className="w-[450px]">
          <BookingForm camperId={camper.id} />
        </aside>
      </div>
    </main>
  );
}