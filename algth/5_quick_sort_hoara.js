//Швидке сортування або ще називають алгоритм Хоара (О(log2 n*n))
//працює рекурсивним способом
//Принцип наступний: в масивы обираэться опорний елемент, наприклад центральний, і з ним порівнюються всі інші елементи масиву - які менші, додаються в новостворений масив left, які більші - додаються в масив right. Таким чином створюються два підмасиви з меншими і більшими числами. Це сортування відбувається далі рекурсивно для всіх підмасивів до тих пір, поки в підмасивах не буде лише по одному елементу (це і буде запобіжником для рекурсії). В кінці відслртовані підмасиви склеюються в один великий.

const arr = [
  2, 5, 3, 1, 0, 12, 10, 6, 9, 11, 7, 6, 2, 1, 5, 16, 25, -1, -5, 10, 6, 9, 11,
  7, 6, 2, 1, 5, 16, 25, -1, -5,
];
let count = 0; //лічильник кількості ітерацій

function quickSort(array) {
  //умова для виходу з рекурсії
  if (array.length <= 1) {
    return array;
  }

  //знаходимо опорний елемент - центральний
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];

  //масиви, в які зберігатимуться числа менші або більші ніж опорний (відповідно)
  let less = [];
  let greater = [];

  //проходимось циклом по всьому масиву
  for (let i = 0; i < array.length; i++) {
    //якщо ітеруємий елемент дорівнює опорному то пропускаємо дану ітерацію
    if (i === pivotIndex) {
      continue;
    }
    //порівнюємо інші елементи з опорним і вкладаємо у відповідні підмасиви
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
    count += 1;
  }

  //повертаємо масив з розгорнутими відповідно підмасивами через рекурсію для кожного i опорними елементами по порядку
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr));
console.log("count= ", count); //77ітерацій