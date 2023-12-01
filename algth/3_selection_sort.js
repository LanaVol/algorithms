// Алгоритм вибіркового сортування

const arr = [2, 5, 3, 1, 0, 12, 8, 6, 9, 11, 7, 6, 2, 1, 5, 16, 25, -1, -5];
let count = 0; //лічильник кількості ітерацій

function selectionSearch(array) {
  for (let i = 0; i < array.length; i++) {
    // index min елементу в масиві при кожній ітерації зовнішнього циклу
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
      count += 1;
    }
    // tmp - тимчасова змінна для того щоб поміняти значення і поставити мінімальне спочатку
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }

  return array;
}

console.log(selectionSearch(arr));
console.log("count= ", count); //171 ітерація при кількості елементів в масиві =19, тобто складність алгоритму О(0,8n*n), перед n стоїть коефіцієнт оскільки при внутрішньому циклу ми кожен раз зсуваємось на 1 індекс в масиві, і оскільки в оцінці складності алгоритму коефіцієнти опускаються то виходить О(n*n)
