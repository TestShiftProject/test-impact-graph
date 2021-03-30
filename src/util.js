export function getAllChildren(graph, node) {
    let children = [];
    let current = graph.getNeighbors(node, 'target');
    while (current.length > 0) {
        let newChildren = [];
        current.forEach((child) => {
            newChildren = newChildren.concat(graph.getNeighbors(child, 'target'))
        });
        children = children.concat(current);
        current = newChildren;
    }
    return children;
}