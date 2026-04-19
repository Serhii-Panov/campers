'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchFilters } from '@/services/api';
import { Button } from './Button';
import { FiltersResponse } from '@/types/camper';
import { Icon } from './Icon';

export const Sidebar = ({ onSearch }: { onSearch: (filters: any) => void }) => {
  const { data: filterOptions, isLoading } = useQuery<FiltersResponse>({
    queryKey: ['filters'],
    queryFn: fetchFilters,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const filters = {
      location: formData.get('location'),
      form: formData.get('form'),
      transmission: formData.get('transmission'),
      engine: formData.get('engine'),
    };
    
    onSearch(filters);
  };

  if (isLoading) return <div className="w-[360px] animate-pulse bg-gray-50 h-screen" />;

  return (
    <aside className="w-[360px] h-full shrink-0 bg-badges rounded-2xl p-8">
      <form onSubmit={handleSubmit}>
        {/* Location */}
        <div className="mb-8">
          <label className="block text-main text-sm font-medium mb-2 opacity-60">Location</label>
          <div className="relative">
            <input 
              name="location"
              type="text" 
              placeholder="City, Country" 
              className="w-full bg-inputs p-4 pl-12 rounded-xl outline-none border border-transparent focus:border-grey-green transition-all"
            />
            <Icon name="map" className="absolute left-4 top-1/2 -translate-y-1/2 " />
          </div>
        </div>

        <h3 className="text-text font-medium mb-8">Filters</h3>

        {/* Секція: Тип кузова (Radio) */}
        <div className="mb-8">
          <p className="text-xl font-bold mb-6 pb-6 border-b border-gray-light text-main">Vehicle type</p>
          <div className="space-y-4">
            {filterOptions?.forms.map((form) => (
              <label key={form} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="form" value={form} className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-light rounded-full flex items-center justify-center peer-checked:border-grey-green transition-all">
                  <div className="w-2.5 h-2.5 bg-grey-green rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                </div>
                <span className="text-text font-medium capitalize group-hover:text-main">
                  {form.replace('_', ' ')}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Секція: Трансмісія (Radio) */}
        <div className="mb-8">
          <p className="text-xl font-bold mb-6 pb-6 border-b border-gray-light text-main">Transmission</p>
          <div className="space-y-4">
            {filterOptions?.transmissions.map((t) => (
              <label key={t} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="transmission" value={t} className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-light rounded-full flex items-center justify-center peer-checked:border-grey-green transition-all">
                  <div className="w-2.5 h-2.5 bg-grey-green rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                </div>
                <span className="text-text font-medium capitalize group-hover:text-main">{t}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Секція: Двигун (Radio) */}
        <div className="mb-10">
          <p className="text-xl font-bold mb-6 pb-6 border-b border-gray-light text-main">Engine</p>
          <div className="space-y-4">
            {filterOptions?.engines.map((e) => (
              <label key={e} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="engine" value={e} className="hidden peer" />
                <div className="w-5 h-5 border-2 border-gray-light rounded-full flex items-center justify-center peer-checked:border-grey-green transition-all">
                  <div className="w-2.5 h-2.5 bg-grey-green rounded-full opacity-0 peer-checked:opacity-100 transition-all"></div>
                </div>
                <span className="text-text font-medium capitalize group-hover:text-main">{e}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full py-4">Search</Button>
          <button 
            type="reset" 
            onClick={() => onSearch({})}
            className="w-full py-4 bg-white border border-gray-light rounded-full font-medium hover:border-grey-green transition-all justify-center flex items-center gap-2 text-main"
          >
            <Icon size={11} name="cross" className="inline-block color-text-main" />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
};