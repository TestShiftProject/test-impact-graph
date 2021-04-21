export function getAllChildren(graph, nodes) {
  let children = [];
  if (!(Array.isArray(nodes))) {
      nodes = [nodes];
  }
  nodes.forEach((node) => {
    let current = graph.getNeighbors(node, 'target');
    while (current.length > 0) {
      let newChildren = [];
      current.forEach((child) => {
        newChildren = newChildren.concat(graph.getNeighbors(child, 'target'))
      });
      children = children.concat(current);
      current = newChildren;
    }
  });
  return children;
}