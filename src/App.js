import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './data/graphData.json';
import './App.css';
import G6, { Algorithm } from '@antv/g6';
import {testNode} from './component/testNode'
import {getAllChildren} from "./util";

const color = '#3c3f41';
const coveredColor = '#80b380';
const additionallyCoveredColor = '#52e052';
const backgroundColor = '#d9d9d9';
const lineHeight = 20;
const r = 2;

const EXPAND_PARTIAL_ICON = function EXPAND_PARTIAL_ICON(x, y, r) {
  return [
    ['M', x - r, y],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x - r + 4, y],
    ['a', r/4, r/4, 0, 0, 0, r + 2, 0],
    ['a', r/4, r/4, 0, 0, 0, -r + 2, 0],
  ];
};

function collapseIcon(openBranches, connectedBranches) {
  if (openBranches === 0) {
    return G6.Marker.expand;
  } else {
    if (openBranches === connectedBranches) {
      return G6.Marker.collapse;
    } else {
      return EXPAND_PARTIAL_ICON;
    }
  }
}

function nodeHeight(node) {
  return lineHeight + node.lines.length * lineHeight;
}

function setupG6() {
  G6.registerNode(
    'card-node',
    {
      drawShape: function drawShape(cfg, group) {
        const width = cfg.width ? cfg.width : 500;
        const shape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: width,
            height: nodeHeight(cfg),
            stroke: color,
            fill: backgroundColor,
            lineWidth: 2,
            radius: r,
          },
          name: 'main-box',
          draggable: true,
          visOnCollapse: false,
        });

        group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: width,
            height: lineHeight,
            fill: color,
            radius: [r, r, 0, 0],
          },
          name: 'title-box',
          draggable: true,
          visOnCollapse: true,
        });

        // title text
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 4,
            x: 4,
            lineHeight: lineHeight,
            text: cfg.signature,
            fill: '#bbbbbb',
          },
          name: 'title-text',
          draggable: true,
          visOnCollapse: true,
        });

        // the method code
        cfg.lines.forEach((item, index) => {

          // line background
          group.addShape('rect', {
            attrs: {
              y: 20 + index * lineHeight,
              x: 1,
              width: width - 2,
              height: 20,
              fill: item.covered ? (item.addCovered ? additionallyCoveredColor : coveredColor) : backgroundColor,
            },
            name: `code-line-background-${index}`,
            draggable: true,
            visOnCollapse: false,
          });

          // code line in method
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              y: 25 + index * lineHeight,
              x: 4,
              lineHeight: 20,
              text: item.code,
              fill: '#3c3f41',
            },
            name: `index-title-${index}`,
            draggable: true,
            visOnCollapse: false,
          });

          if (item.callsMethod) {
            group.addShape('marker', {
              attrs: {
                x: width - 16,
                y: 30 + index * lineHeight,
                r: 6,
                cursor: 'pointer',
                symbol:  EXPAND_PARTIAL_ICON, //G6.Marker.collapse,  //cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
                stroke: '#666',
                lineWidth: 1,
              },
              name: 'collapse-branch-icon',
              visOnCollapse: false,
              draggable: true,
              index: index,
              collapse: false,
            });
          }
        });

        return shape;
      },
      getAnchorPoints(cfg) {
        let points = [[0.5, 0]]; // The center of the top border
        cfg.lines.forEach((item, index) => {
          const lineHeight = (1 / (cfg.lines.length + 1))
          points.push([1, lineHeight * (index + 1.5)]);
        });
        return points;
      },
      // Respond to states
      setState(name, value, item) {
        if (name === 'selected') {
          const group = item.getContainer();
          //const shape = group.get('children')[0]; // Find the first graphics shape of the node. It is determined by the order of being added
          const shape = group.findAll(function (item) {
            return !item.get('visOnCollapse');
          });
          if (value) {
            shape.forEach((s) => s.hide())
          } else {
            shape.forEach((s) => s.show())
          }
        }
      },
    },
    'single-node',
  );
}

function defaultView(graph) {
  const { depthFirstSearch } = Algorithm;
  depthFirstSearch(data, 'MethodSignatureBackedByPsiMethod: booleanAttributesAreEmptyStringValues_assSep10([])_-1', {
    enter: ({ current, previous }) => {
      // The callback function for the traversal's beginning
    },
    leave: ({ current, previous }) => {
      // The callback function for the traversal's ending
      const currentNode = graph.findById(current);
      const previousNode = graph.findById(previous);
      if (currentNode && previousNode) {
        if (currentNode.get('model').addCovered) {
          previousNode.get('model').addCovered = true;
        }
      }
    }
  });

  const nodes = graph.findAll('node', function (item) {
    return !item.get('model').addCovered;
  });
  nodes.forEach((node) => {
    // TODO set all outgoing markers to be collapsed
    // const nodeChildren = node.get('group').get('children');
    // nodeChildren.forEach( function (marker, index) {
    //   if (marker.get('type') === 'marker') {
    //     collapseMarker(node, marker, graph);
    //   }
    // });
    collapseNodeInParent(node, graph);
  });


  // const visible = graph.findAll('node', function (item) {
  //   return item.isVisible();
  // });
  graph.updateLayout({});
}

function collapseNodeInParent(node, graph) {
  const incomingEdge = node.getInEdges();

  const sourceNode = graph.findById(incomingEdge.get('model').source);

  // find the marker corresponding too the edge
  const markers = sourceNode.get('group').get('children')
  .filter(child => (child.get('type') === 'marker'));
  console.log(markers);
  const fittingMarkers = markers.filter(child => (child.get('index') === incomingEdge.get('model').sourceAnchor - 1));
  console.log(fittingMarkers);
  if (fittingMarkers.length !== 1) {
    console.log("more or less than one source marker found!");
  } else {
    fittingMarkers[0].attrs.symbol = G6.Marker.expand;
    fittingMarkers[0].cfg.collapse = true;
    graph.hideItem(node);
  }
}

function collapseMarker(node, marker, graph) {
  const outgoingEdge = graph.findAll('edge', (edge) => {
    return edge.get('model').source === node.get('id') && edge.get('model').sourceAnchor === marker.cfg.index + 1;
  });

  const nextNodes = outgoingEdge.flatMap((edge) => {
    return graph.findAll('node', (node) => {
      return node.get('id') === edge.get('model').target;
    });
  });

  if (marker.cfg.collapse) {
    // expand branch
    nextNodes.forEach((node) => graph.showItem(node));
    // only expand one layer
    //children.forEach((c) => graph.showItem(c));
    marker.attrs.symbol = G6.Marker.collapse;
  } else {
    // collapse branch
    nextNodes.forEach((node) => graph.hideItem(node));

    // collapse all children
    const children = getAllChildren(graph, nextNodes);
    children.forEach((c) => graph.hideItem(c));

    marker.attrs.symbol = G6.Marker.expand;
  }
  marker.cfg.collapse = !marker.cfg.collapse;
  graph.updateLayout({});
  graph.refresh();
}

function App() {
  setupG6();

  const ref = React.useRef(null);
  let graph = null;

  useEffect(() => {
    if (!graph) {
      graph = new G6.Graph({
        container: ReactDOM.findDOMNode(ref.current),
        width: 1400,
        height: 1000,
        fitCenter: true,
        fitView: true,
        modes: {
          default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          //align: 'UL',
          nodesepFunc: node => {
            return nodeHeight(node)/2;
          },
          ranksepFunc: node => {
            return 250;
          },
          //direction: 'LR',
          //indent: 600,
          // getHeight: (node) => {
          //   return nodeHeight(node);
          // }
        },
        defaultNode: {
          type: 'card-node',
        },
        defaultEdge: {
          type: 'polyline',
          style: {
            stroke: '#3c3f41',
            lineWidth: 2,
          },
        },
      });
    }

    // Click top bar / text of a method to collapse it, click again to show it again
    graph.on('title-text:click', (ev) => {
      const node = ev.item;
      const value = !node.hasState('selected')
      graph.setItemState(node, 'selected', value); // Switch the selected state
      const children = getAllChildren(graph, node);
      if (value) {
        children.forEach((c) => graph.hideItem(c));
      } else {
        children.forEach((c) => graph.showItem(c));
      }
    });

    // Click to expand / collapse branch
    graph.on('collapse-branch-icon:click', (ev) => {
      collapseMarker(ev.item, ev.target,  graph);
      graph.layout();
    });

    graph.data(data);
    graph.render();
    defaultView(graph);
    graph.fitView(20);
    console.log(graph.get('layout'));
  }, []);


  return <div ref={ref}/>;
}


export default App;
