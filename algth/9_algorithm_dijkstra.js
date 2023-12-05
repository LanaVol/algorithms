//Пошук найкоротшого шляху в графі

const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
  //об'єкт з найкоротшими шляхами / їх значеннями
  const costs = {};

  //масив з вузлами, які вже перевірені
  const processed = [];

  //об'єкт із сусідніми вершинами поточного вузла
  let neightbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 10000000;
    }
  });
  // console.log(costs); //{ b: 2, c: 1, d: 10000000, e: 10000000, f: 10000000, g: 10000000 }

  //функція для знаходження найкоротших шляхів
  let node = findNodeLowestCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neightbors = graph[node];
    Object.keys(neightbors).forEach((neighbor) => {
      let newCost = cost + neightbors[neighbor];
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowestCost(costs, processed);
  }
  return costs;
}

function findNodeLowestCost(costs, processed) {
  //мінімальне значення, якому присвоюємо наше велике число
  let lowestCost = 10000000;
  let lowestNode;

  Object.keys(costs).forEach((node) => {
    //вартість-значення поточної ноди(ребра)
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
}

console.log(shortPath(graph, "a", "g")); //{ b: 2, c: 1, d: 6, e: 3, f: 4, g: 5 } - отримано об'єкт - найкоротший шлях з А до G
