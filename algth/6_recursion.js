//Рекурсія - функція, яка викликає сама себе

// Знайти факторіал числа (факторіал 5! = 1*2*3*4*5)

function factorial(num) {
  if (num === 1) {
    return (num = 1);
  }
  return num * factorial(num - 1);
}

console.log(factorial(5)); //120

//Знайти число в ряді Фібоначі на заданій позиції, що передається аргументом в функцію
//ряд Фібоначчі - 1,1,2,3,5,8,13,21...

function fibonachi(n) {
  if (n === 1 || n === 2) {
    return (n = 1);
  }
  return fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(8)); //21 - число в ряді Фібоначі на 8 позиції
