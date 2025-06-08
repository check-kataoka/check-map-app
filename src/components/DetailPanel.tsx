import { FC } from 'react';
import { Property } from '@/types/Property';

interface DetailPanelProps {
  property: Property | null;
}

const DetailPanel: FC<DetailPanelProps> = ({ property }) => {
  if (!property) {
    return (
      <div className="flex items-center justify-center h-full text-textSub">
        物件を選択してください
      </div>
    );
  }

  const { name, kana, zip, address, lat, lng } = property;
  const googleUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  return (
    <div className="mx-auto text-center space-y-4">
      <h2 className="text-xl font-bold">物件名：{name}</h2>

      <p>
        <span className="font-semibold">郵便番号：</span>
        {zip}
      </p>

      <p>
        <span className="font-semibold">住所：</span>
        {address}
      </p>

      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-primary text-white rounded-lg
                   hover:bg-[#b52c25] transition"
      >
        現在地から経路案内
      </a>
    </div>
  );
};

export default DetailPanel;
