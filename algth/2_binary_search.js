// Бінарний пошук елементів в масиві
//(працює за логарифмічний час, але за умови відсортованого масиву)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0; //лічильник кількості ітерацій

//В-1 за допомогою функції з циклом
function binarySearch(array, item) {
  let start = array[0];
  let end = array.length;
  let found = false;
  let position = -1;
  let middle;

  while (found === false && start <= end) {
    // індекс серединного елементу
    middle = Math.floor((start + end) / 2);
    count++;

    // якщо серединний елемент є елементом який шукаємо
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }

    // шукаємо в лівій половині масиву, відкидаючи праву
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      // або в правій половині масиву, відкидаючи ліву
      start = middle + 1;
    }
  }
  return position;
}

console.log(binarySearch(arr, 16)); //знаходить за 4 ітерації
console.log("count= ", count); //О(log2 N) - складність такого алгоритму О від логарифму N за основою 2; тобто маємо 16 елементів в масиві і логарифм від 16 за основою 2 => 4 і за чотири ітерації ми можемо знайти потрібний нам елемент

// --------------Задача знайти в масиві елемент, або якщо він відсутній то знайти позицію на яку він має бути вставлений по порядку
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let position = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] === target) {
      position = mid;
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  // If the target is not found, 'position' remains -1
  // Use 'start' as the position where the target should be inserted
  if (position === -1) {
    position = start;
  }

  return position;
};
