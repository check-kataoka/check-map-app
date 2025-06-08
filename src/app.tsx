import { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import DetailPanel from '@/components/DetailPanel';
import properties from '@/data/properties.json';
import { Property } from '@/types/Property';

export default function App() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-secondary">
      {/* ───────── ヘッダー ───────── */}
      <header className="bg-primary text-white py-4 text-center">
        <h1 className="font-impact text-3xl tracking-wide">CHECK&nbsp;MAP</h1>
      </header>

      {/* ───────── メイン ───────── */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-xl space-y-8">
          <SearchBar list={properties} onSelect={setSelected} />

          {/* ▼ ここだけ変更 ▼ */}
          {selected && (
            <div className="flex justify-center">
              <DetailPanel property={selected} />
            </div>
          )}
        </div>
      </main>

      {/* ───────── フッター ───────── */}
     <footer className="bg-black text-white text-center text-xs p-2">
  <div>会社名：㈱CHECKホールディングス</div>

  {/* 住所 ―― <a> で囲んで Google マップへ */}
  <div>
    住所：
<a
  href="https://www.google.com/maps/search/?api=1&query=810-0001%20福岡市中央区天神3丁目10-30%20オフィスニューガイア天神6F-B"
  target="_blank"
  rel="noopener noreferrer"
  className="no-underline text-white hover:text-accent"
>
  810-0001&nbsp;福岡市中央区天神3丁目10-30&nbsp;オフィスニューガイア天神6F-B
</a>

  </div>

  <div>
    会社HP：
    <a href="https://check-fukuoka.com/" className="underline hover:text-accent">
      https://check-fukuoka.com/
    </a>
    ／ TEL：092-791-5591
  </div>
</footer>

    </div>
  );
}
