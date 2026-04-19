"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchCamperById, fetchCamperReviews } from "@/services/api";
import { CamperGallery } from "@/components/CamperDetails/Gallery";
import { BookingForm } from "@/components/CamperDetails/BookingForm";
import { ReviewsList } from "@/components/CamperDetails/ReviewsList";
import { CamperMainInfo } from "@/components/CamperDetails/CamperMainInfo";
import { VehicleDetails } from "@/components/CamperDetails/VehicleDetails";
import { CamperReviews } from "@/types/camper";

export default function CamperDetailsPage() {
  const { id } = useParams();

  // 1. Запит на деталі кемпера
  const {
    data: camper,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["camper", id],
    queryFn: () => fetchCamperById(id as string),
  });

  // 2. Запит на відгуки (Тепер він викликається ЗАВЖДИ)
  const { data: reviews, isLoading: isReviewsLoading } = useQuery<
    CamperReviews[]
  >({
    queryKey: ["camperReviews", id],
    queryFn: () => fetchCamperReviews(id as string),
    enabled: !!id, // Запит піде тільки якщо є id
  });

  // 3. Тільки після всіх хуків робимо перевірки на завантаження
  if (isLoading)
    return <div className="p-20 text-center">Loading details...</div>;
  if (error || !camper)
    return <div className="p-20 text-center">Camper not found</div>;

  return (
    <div className="container mx-auto py-10 px-4">
      {/* ВЕРХНЯ СЕКЦІЯ: Галерея та Основна інформація */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 h-full">
        {/* Лівий блок: Галерея */}
        <section className="h-full">
          <CamperGallery images={camper.gallery} />
        </section>

        {/* Правий блок: Опис та Характеристики */}
        <section className="flex flex-col  gap-6">
          <CamperMainInfo camper={camper} />
          <VehicleDetails camper={camper} />
        </section>
      </div>

      {/* НИЖНЯ СЕКЦІЯ: Відгуки та Форма */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
        {/* Лівий блок: Відгуки */}
        <section className="flex flex-col gap-8">
          {isReviewsLoading ? (
            <p>Loading reviews...</p>
          ) : (
            <ReviewsList reviews={reviews || []} />
          )}
        </section>

        {/* Правий блок: Форма бронювання */}
        <section className="sticky top-10">
          <BookingForm camperId={camper.id} />
        </section>
      </div>
    </div>
  );
}
