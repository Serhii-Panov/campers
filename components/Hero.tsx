import { Button } from './Button';
import Link from 'next/link';

export const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center bg-cover bg-center" 
             style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
      
      {/* Контент поверх картинки */}
      <div className="container mx-auto px-16 relative z-10 text-white">
        <h1 className="text-[48px] font-bold leading-tight mb-4">
          Campers of your dreams
        </h1>
        <p className="text-[24px] font-medium mb-10">
          You can find everything you want in our catalog
        </p>
        
        <Link href="/catalog">
          <Button className="bg-grey-green !hover:bg-green-hover text-white px-12 py-4">
            View Now
          </Button>
        </Link>
      </div>
    </section>
  );
};