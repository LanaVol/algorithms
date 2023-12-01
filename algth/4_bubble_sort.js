// Бульбашкове сортування - попарно перевіряє яке з чисел є еншим і переставляє наперед, таким чином число як бульбашка вспливає
const arr = [2, 5, 3, 1, 0, 12, 8, 6, 9, 11, 7, 6, 2, 1, 5, 16, 25, -1, -5];
let count = 0; //лічильник кількості ітерацій

function bubleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
      count += 1;
    }
  }
  return array;
}

console.log(bubleSort(arr));
console.log("count= ", count); // O(n*n), 361 ітерація (19*19, в масиві 19 елементів)- алгоритм менш ефективний оскільки тут вже немає коефіцієнта(як у вибірковому сортуванні) і він працює з більшою кількістю ітерацій
