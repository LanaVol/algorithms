//Map - структура даних, що зберігає в собі дані у вигляді ключ:значення. Відмінність від об'экта в тому, що в якості ключа ми можемо зберігати також і об'єкти
const map = new Map();
map.set("name", "Lana"); //параметри відповідно 1-ключ, 2-значення

const objKey = { id: 5 };
map.set(objKey, "LanaVol"); //параметри відповідно 1-ключ, 2-значення

console.log(map.get("name")); //Lana
console.log(map.get(objKey)); //LanaVol

//Set - структура даних, що зберігає в собі набір унікальних значень

const set = new Set();

set.add(6);
set.add(4);
set.add(1);
set.add(6);
set.add(4);

console.log(set); //Set(3) { 6, 4, 1 }
