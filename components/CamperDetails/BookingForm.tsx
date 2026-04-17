'use client';

import { useMutation } from '@tanstack/react-query';
import { sendBooking } from '@/services/api';
import toast from 'react-hot-toast';
import { Button } from '../Button';

export const BookingForm = ({ camperId }: { camperId: string }) => {
  const mutation = useMutation({
    mutationFn: sendBooking,
    onSuccess: () => {
      toast.success('Successfully booked! We will contact you soon.');
    },
    onError: () => {
      toast.error('Something went wrong. Please try again.');
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      camperId,
    };
    mutation.mutate(data);
  };

  return (
    <div className="p-8 border border-gray-light rounded-3xl bg-white sticky top-10">
      <h3 className="text-xl font-bold mb-2">Book your campervan now</h3>
      <p className="text-text mb-6">Stay connected! We are always ready to help you.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" type="text" placeholder="Name*" required className="w-full p-4 bg-inputs rounded-xl outline-none" />
        <input name="email" type="email" placeholder="Email*" required className="w-full p-4 bg-inputs rounded-xl outline-none" />
        <textarea placeholder="Comment" rows={4} className="w-full p-4 bg-inputs rounded-xl outline-none resize-none" />
        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          {mutation.isPending ? 'Sending...' : 'Send'}
        </Button>
      </form>
    </div>
  );
};