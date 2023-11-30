// Лінійний пошук елементів в масиві (працює за лінійний час)
const arr = [1, 5, 7, 6, 2, 1, 9, 12, 3, 4]; //10 елементів в масиві

let count = 0; //лічильник кількості ітерацій

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(arr, 10)); //поверне індекс елементу або null
console.log("count= ", count); //O(n) - складність алгоритму, де n - кількість елементів /ітерацій в масиві
