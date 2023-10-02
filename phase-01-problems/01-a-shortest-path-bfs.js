const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: [],
};

function aShortestPath(start, end) {
  let queue = [{ node: start, path: [start] }];
  let visited = {};

  while (queue.length > 0) {
    let current = queue.shift();
    let currentNode = current.node;
    if (currentNode === end) return current.path;

    visited[currentNode] = true;

    let neighbors = adjList[currentNode];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      if (!visited[neighbor]) {
        queue.push({
          node: neighbor,
          path: [...current.path, neighbor],
        });
      }
    }
  }

  return null; // No path found
}

console.log(aShortestPath(1, 4));

console.log(aShortestPath(1, 6));
