import { DetailedCamper } from '@/types/camper';

interface Props {
  camper: DetailedCamper;
}

export const VehicleDetails = ({ camper }: Props) => {
  // Форматуємо назви характеристик для відображення
  const specs = [
    { label: 'Form', value: camper.form.replace('_', ' ') },
    { label: 'Length', value: camper.length },
    { label: 'Width', value: camper.width },
    { label: 'Height', value: camper.height },
    { label: 'Tank', value: camper.tank },
    { label: 'Consumption', value: camper.consumption },
  ];

  return (
    <div className="flex flex-col gap-11">
      {/* Блок технічних характеристик */}
      <div className="bg-badges rounded-2xl p-6">
        <h3 className="text-xl font-semibold mb-6 border-b border-[#dadde1] pb-6">
          Vehicle details
        </h3>
         <div className="flex flex-wrap gap-2">
        {/* Мапимо масив зручностей з бекенду */}
        {camper.amenities.map((item, index) => (
          <div 
            key={index} 
            className="px-[18px] py-3 bg-gray-light rounded-[100px] flex items-center gap-2"
          >
            <span className="capitalize">{item}</span>
          </div>
        ))}
      </div>
        <ul className="flex flex-col gap-2">
          {specs.map((spec, index) => (
            <li key={index} className="flex justify-between text-lg font-medium">
              <span className="text-[#101828]">{spec.label}</span>
              <span className="text-[#101828] capitalize">{spec.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};