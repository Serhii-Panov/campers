import { Button } from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main 
        className="grow flex items-start bg-cover bg-center relative pt-[195px]"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/hero-bg.jpg')" 
        }}
      >
        <div className="container px-16">
          <div className="max-w-150 text-white">
            <h1 className="text-[48px] font-semibold leading-tight mb-4">
              Campers of your dreams
            </h1>
            <p className="text-[24px] font-semibold mb-10">
              You can find everything you want in our catalog
            </p>
            
            <Link href="/catalog">
              <Button>View Now</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}