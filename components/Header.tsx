import Link from 'next/link';

export const Header = () => {
  return (
    <header className="bg-white py-6 border-b border-gray-light">
      {/* Використовуємо w-full + px-16 замість container. 
          Це гарантує, що сітка grid-cols-3 буде розрахована від країв екрану,
          що зробить центральну колонку математично ідеальним центром.
      */}
      <div className="w-full px-16 grid grid-cols-3 items-center">
        
        {/* 1. Логотип (зліва) */}
        <div className="flex justify-start">
          <Link href="/" className="text-2xl font-bold flex shrink-0">
            <span className="text-main">Travel</span>
            <span className="text-text">Trucks</span>
          </Link>
        </div>

        {/* 2. Навігація (точно по центру) */}
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

        {/* 3. Порожня права частина для балансу сітки */}
        <div className="flex justify-end invisible lg:visible">
          {/* Пустий блок, щоб ліва частина не перетягувала центр на себе */}
        </div>
        
      </div>
    </header>
  );
};