import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-inputs py-6">
      <div className="w-full px-16 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <Link href="/" className="text-2xl font-bold flex shrink-0">
            <span className="text-main">Travel</span>
            <span className="text-text">Trucks</span>
          </Link>
        </div>

        <nav className="flex gap-8 justify-center">
          <Link 
            href="/" 
            className="font-medium text-main hover:text-grey-green transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/catalog" 
            className="font-medium text-main hover:text-grey-green transition-colors"
          >
            Catalog
          </Link>
        </nav>

        <div className="flex justify-end invisible lg:visible">
          {/* Пустий блок, щоб ліва частина не перетягувала центр на себе */}
        </div>
        
      </div>
    </header>
  );
};