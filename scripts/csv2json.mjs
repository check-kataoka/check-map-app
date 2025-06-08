// csv2json.mjs
import csv from 'csvtojson';
import { writeFileSync } from 'fs';
import { join } from 'path';

const csvPath = join(process.cwd(), 'assets', 'properties.csv');
const jsonPath = join(process.cwd(), 'src', 'data', 'properties.json');

const raw = await csv().fromFile(csvPath);

const jsonArray = raw.map((item) => ({
  name: item['物件名'],
  kana: item['物件名カナ'],
  postal: item['郵便番号'],
  address: item['住所'],
  lat: parseFloat(item['緯度']),
  lng: parseFloat(item['経度']),
}));

writeFileSync(jsonPath, JSON.stringify(jsonArray, null, 2));
console.log(`✅ CSV → JSON 変換完了: ${jsonPath}`);
