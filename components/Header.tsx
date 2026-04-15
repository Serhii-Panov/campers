import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-inputs py-6"> 
      <div className="container mx-auto px-16 flex justify-between items-center">
        {/* Логотип */}
        <Link href="/" className="text-2xl font-bold flex items-center">
          <span className="text-main">Travel</span>
          <span className="text-[#475467]">Trucks</span>
        </Link>

        {/* Навігація */}
        <nav className="flex gap-8">
          <Link href="/" className="text-main font-medium hover:text-grey-green transition-colors">
            Home
          </Link>
          <Link href="/catalog" className="text-main font-medium hover:text-grey-green transition-colors">
            Catalog
          </Link>
        </nav>
        
        {/* Порожній div для балансу flex (або залиш місце під щось інше) */}
        <div className="w-[120px] hidden md:block"></div>
      </div>
    </header>
  );
};