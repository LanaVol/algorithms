//Знайти суму значень всіх дочірніх вузлів дерева
//Визначаємо дерево як масив об'эктів вузлів, в кожного з яких v-значення, с-підмасиви дочірніх вузлів

const tree = [
  {
    v: 5,
    c: [
      {
        v: 5,
        c: [
          {
            v: 5,
          },
          {
            v: 5,
          },
        ],
      },
    ],
  },

  {
    v: 6,
    c: [{ v: 5 }, { v: 5 }, { v: 5 }],
  },
  {
    v: 1,
    c: [{ v: 5 }, { v: 5 }],
  },
  {
    v: 8,
    c: [
      {
        v: 8,
        c: [
          {
            v: 5,
            c: [{ v: 5 }],
          },
        ],
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    sum += node.v;
    if (!node.c) {
      return node.v;
    }
    sum += recursive(node.c);
  });

  return sum;
};

console.log(recursive(tree)); //78 - сума всіх значень в дереві
