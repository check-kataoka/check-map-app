// SearchBar.tsx
import { FC, useMemo, useState } from "react";
import Fuse from "fuse.js";
import { kanaToKatakana } from "../utils/kanaToKatakana";
import { useDebounce } from "../hooks/useDebounce";
import { Property } from "../types/Property";

interface SearchBarProps {
  list: Property[];
  onSelect: (item: Property) => void;
}

const SearchBar: FC<SearchBarProps> = ({ list, onSelect }) => {
  const [input, setInput] = useState("");
  const debounced = useDebounce(input, 200);

  const fuse = useMemo(() => {
    return new Fuse(list, {
      keys: ["name", "kana"],
      threshold: 0.4,
    });
  }, [list]);

  const results = useMemo(() => {
    const keyword = kanaToKatakana(debounced);
    return keyword ? fuse.search(keyword).map((res) => res.item) : [];
  }, [debounced, fuse]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <input
        type="text"
        className="w-full border rounded-lg p-2 shadow"
        placeholder="物件名やカナで検索"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {results.length > 0 && (
        <ul className="bg-white border mt-2 rounded-lg shadow overflow-hidden">
          {results.map((item, i) => (
            <li
              key={i}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onSelect(item);
                setInput("");
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
