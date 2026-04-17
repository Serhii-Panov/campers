import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white py-6 border-b border-gray-light">
      {/* Використовуємо grid або flex з трьома частинами для ідеального центрування */}
      <div className="container mx-auto px-16 grid grid-cols-3 items-center">
        
        {/* 1. Логотип (завжди зліва) */}
        <Link href="/" className="text-2xl font-bold flex shrink-0">
          <span className="text-main">Travel</span>
          <span className="text-text">Trucks</span>
        </Link>

        {/* 2. Навігація (точно по центру сторінки) */}
        <nav className="flex gap-8 justify-center">
          <Link href="/" className="font-medium text-main hover:text-grey-green transition-colors">
            Home
          </Link>
          <Link href="/catalog" className="font-medium text-main hover:text-grey-green transition-colors">
            Catalog
          </Link>
        </nav>

        {/* 3. Порожній блок (щоб врівноважити сітку і центр не зміщувався) */}
        <div className="flex justify-end">
          {/* Тут можна буде потім додати кнопку або просто залишити порожнім */}
        </div>
        
      </div>
    </header>
  );
};