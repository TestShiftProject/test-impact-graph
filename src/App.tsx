import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './data/graphData.json';
import './App.css';
import G6, { Algorithm, ModelConfig, Graph, INode, Marker, Item, Shape, ShapeOptions, IEdge} from '@antv/g6';
import {getAllChildren} from "./util";
import {Line, TestGraphNode} from "./data/graphData";

import data0 from './data/TestImpactGraph/annotated_1/graph.json';
import data2 from './data/TestImpactGraph/modifyAnnotations_5/graph.json';
import data3 from './data/TestImpactGraph/modifyAnnotations_excluded/graph.json';
import data4 from './data/TestImpactGraph/modifyAnnotations_4/graph.json';
import data5 from './data/TestImpactGraph/modifyAnnotations_3/graph.json';
import data6 from './data/TestImpactGraph/shouldSupportClassInDefaultPackage_excluded/graph.json';
import data7 from './data/TestImpactGraph/shouldSupportClassInDefaultPackage_2/graph.json';
import { GraphData } from '@antv/algorithm/lib/types';
import {findAllInRenderedTree} from "react-dom/test-utils";

const color = '#3c3f41';
const colorBlack = '#000000';
const colorWhite = '#FFFFFF';
const coveredColor = '#80b380';
const additionallyCoveredColor = '#52e052';
const backgroundColor = '#d9d9d9';
const lineHeight = 20;
const r = 2;

const EXPAND_PARTIAL_ICON = function EXPAND_PARTIAL_ICON(x: number, y: number, r: number) {
  return [
    ['M', x - r, y],
    ['a', r, r, 0, 1, 0, r * 2, 0],
    ['a', r, r, 0, 1, 0, -r * 2, 0],
    ['M', x - r + 4, y],
    ['a', r / 4, r / 4, 0, 0, 0, r + 2, 0],
    ['a', r / 4, r / 4, 0, 0, 0, -r + 2, 0],
  ];
};

function addSelector(container: Element | Text) {
  // Add a selector to DOM
  const selector = document.createElement('select');
  selector.id = 'selector';
  const selection1 = document.createElement('option');
  selection1.value = 'data0';
  selection1.innerHTML = 'annotated_1';
  selector.appendChild(selection1);

  const selection8 = document.createElement('option');
  selection8.value = 'data7';
  selection8.innerHTML = 'shouldSupportClassInDefaultPackage_2';
  selector.appendChild(selection8);

  const selection6 = document.createElement('option');
  selection6.value = 'data5';
  selection6.innerHTML = 'modifyAnnotations_3';
  selector.appendChild(selection6);

  const selection5 = document.createElement('option');
  selection5.value = 'data4';
  selection5.innerHTML = 'modifyAnnotations_4';
  selector.appendChild(selection5);

  const selection3 = document.createElement('option');
  selection3.value = 'data2';
  selection3.innerHTML = 'modifyAnnotations_5';
  selector.appendChild(selection3);

  const selection4 = document.createElement('option');
  selection4.value = 'data3';
  selection4.innerHTML = 'modifyAnnotations_excluded';
  selector.appendChild(selection4);

  const selection7 = document.createElement('option');
  selection7.value = 'data6';
  selection7.innerHTML = 'shouldSupportClassInDefaultPackage_excluded';
  selector.appendChild(selection7);

  container.appendChild(selector);
  return selector;
}


function collapseIcon(openBranches: number, connectedBranches: number) {
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

function nodeHeight(node: TestGraphNode) {
  return 2 * lineHeight + node.lines.length * lineHeight;
}

function determineWidth(node: TestGraphNode) {
  const lines = [node.className, node.signature].concat(node.lines.map(line => line.code));
  const maxLength = lines.map(line => line.length)
      .reduce((previousValue, currentValue) => Math.max(previousValue, currentValue));
  return maxLength * 8;
}

function setupG6() {
  G6.registerNode(
      'card-node',
      {
        drawShape: function drawShape(cfgM, group) {
          let cfg = cfgM as TestGraphNode;
          if (!cfg) {
            throw new Error("cfg is undefined in drawShape");
          }
          if (!group) {
            throw new Error("group is undefined in drawShape");
          }

          const width = cfg.width ? cfg.width : determineWidth(cfg);

          cfg.size = [determineWidth(cfg), nodeHeight(cfg)]

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
            name: 'title-box-class',
            draggable: true,
            visOnCollapse: true,
          });

          // title text
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: 4,
              y: 4,
              lineHeight: lineHeight,
              text: cfg.className,
              fill: colorWhite,
              fontFamily: 'monospace',
            },
            name: 'title-text-class',
            draggable: true,
            visOnCollapse: true,
          });

          group.addShape('rect', {
            attrs: {
              x: 0,
              y: lineHeight,
              width: width,
              height: lineHeight,
              fill: color,
              radius: [r, r, 0, 0],
            },
            name: 'title-box-signature',
            draggable: true,
            visOnCollapse: true,
          });

          // title text
          group.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: 4,
              y: 4 + lineHeight,
              lineHeight: lineHeight,
              text: cfg.signature,
              fill: colorWhite,
              fontFamily: 'monospace',
            },
            name: 'title-text-signature',
            draggable: true,
            visOnCollapse: true,
          });

          // the method code
          cfg.lines.forEach((item, index) => {

            // line background
            group.addShape('rect', {
              attrs: {
                x: 1,
                y: (index + 2) * lineHeight,
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
                x: 4,
                y: 5 + (index + 2) * lineHeight,
                lineHeight: 20,
                text: item.code,
                fill: colorBlack,
                fontFamily: 'monospace',
              },
              name: `index-title-${index}`,
              draggable: true,
              visOnCollapse: false,
            });

            if (item.callsMethod) {
              group.addShape('marker', {
                attrs: {
                  x: width - 16,
                  y: 10 + (index + 2) * lineHeight,
                  r: 6,
                  cursor: 'pointer',
                  symbol: G6.Marker.collapse,  //cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
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
        getAnchorPoints(cfgM) {
          let cfg = cfgM as TestGraphNode;
          let points = [[0.5, 0]]; // The center of the top border
          cfg.lines.forEach((item, index) => {
            const lineHeight = (1 / (cfg.lines.length + 2))
            points.push([1, lineHeight * (index + 2.5)]);
          });
          return points;
        },
        // Respond to states
        setState(name, value, item) {
          if (!item) {
            throw new Error("");
          }
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

function defaultView(graph: Graph, data: GraphData | undefined) {
  if (!data) {
    throw new Error();
  }
  const { depthFirstSearch } = Algorithm;
  depthFirstSearch(data, 'root', {
    enter: ({ current, previous }) => {
      // The callback function for the traversal's beginning
    },
    leave: ({ current, previous }) => {
      // The callback function for the traversal's ending
      const currentNode = graph.findById(current);
      if (currentNode && currentNode.get('model').addCovered) {
        console.log('current covers!');
      } else {
        const i = 5;
      }
      if (previous != null) {
        const previousNode = graph.findById(previous);
        if (currentNode && previousNode) {
          if (currentNode.get('model').addCovered) {
            previousNode.get('model').addCovered = true;
          }
        }
      }
    }
  });

  // collapse all non-added-coverage-nodes
  const nodesNotAddingCoverage = graph.findAll('node', function (item) {
    return !item.get('model').addCovered;
  });

  const nodesLeadingToAddedCoverage = graph.findAll('node', function (item) {
    return item.get('model').addCovered;
  });

  nodesNotAddingCoverage.forEach((node) => {
    // TODO set all outgoing markers to be collapsed
    // const nodeChildren = node.get('group').get('children');
    // nodeChildren.forEach( function (marker, index) {
    //   if (marker.get('type') === 'marker') {
    //     collapseMarker(node, marker, graph);
    //   }
    // });
    collapseNodeInParent(node as TestGraphNode, graph);
  });

  const visible = graph.findAll('node', function (item) {
    return item.isVisible();
  });
  // // set markers correctly
  // visible.forEach((nodei) => {
  //   let node = nodei as TestGraphNode;
  //   // TODO set icons for all outgoing markers
  //   const nodeChildren = node.get('group').get('children');
  //   nodeChildren.forEach(function (marker: ShapeOptions, index: number) {
  //     if (marker.get('type') === 'marker') {
  //       // determine number of outgoing edges
  //       setMarkerCorrectly(node, marker);
  //     }
  //   });
  // });
  graph.updateLayout({});
  graph.fitView(20);
}

function setMarkerCorrectly(node: TestGraphNode, marker: ShapeOptions) {
  const outgoing = node.getOutEdges()
      .filter((edge: IEdge) => edge.get('model').sourceAnchor - 1 == marker.get('index'));
  marker.attrs.symbol = collapseIcon(outgoing.filter((edge:IEdge) => edge.isVisible()).length, outgoing.length);
}

function collapseNodeInParent(node: TestGraphNode, graph: Graph) {
  const incomingEdge = node.getInEdges()[0];

  const sourceNode = graph.findById(incomingEdge.get('model').source) as TestGraphNode;

  // find the marker corresponding too the edge
  const markers = sourceNode.get('group').get('children')
  .filter((child: Item) => (child.get('type') === 'marker'));
  //console.log(markers);
  const fittingMarkers = markers.filter((child: Item) => (child.get('index') === incomingEdge.get('model').sourceAnchor - 1));
  //console.log(fittingMarkers);

  if (fittingMarkers.length !== 1) {
    console.log("more or less than one source marker found!");
  } else {
    graph.hideItem(node);

    setMarkerCorrectly(sourceNode, fittingMarkers[0]);
    fittingMarkers[0].cfg.collapse = true;
  }
}

function collapseMarker(node: TestGraphNode, marker: ShapeOptions, graph: Graph) {
  const outgoingEdge = graph.findAll('edge', (edge) => {
    return edge.get('model').source === node.get('id') && edge.get('model').sourceAnchor === marker.cfg.index + 1;
  });

  const nextNodes = outgoingEdge.flatMap((edge) => {
    return graph.findAll('node', (node) => {
      return node.get('id') === edge.get('model').target;
    });
  });

  if (marker.get('collapse')) {
    // expand branch
    nextNodes.forEach((node) => graph.showItem(node));
    // only expand one layer
    //children.forEach((c) => graph.showItem(c));
    marker.attrs.symbol = G6.Marker.collapse;
    marker.cfg.collapse = false;
  } else {
    // collapse all children
    const children = getAllChildren(graph, nextNodes);
    children.forEach((child) => collapseNodeInParent(child, graph));

    // collapse branch
    nextNodes.forEach((node) => collapseNodeInParent(node as TestGraphNode, graph));

    marker.attrs.symbol = G6.Marker.expand;
  }
  graph.updateLayout({});
  graph.fitView(20);
  graph.refresh();
}

function App() {
  setupG6();

  const ref = React.useRef(null);
  // @ts-ignore
  let graph: Graph = null;



  useEffect(() => {

    const container = ReactDOM.findDOMNode(ref.current)!;

    const selector = addSelector(container);

    if (!graph) {
      graph = new G6.Graph({
        // @ts-ignore
        container: ReactDOM.findDOMNode(ref.current),
        width: 1800,
        height: 900,
        fitView: true,
        fitCenter: true,
        modes: {
          default: ['drag-node', 'drag-canvas', 'zoom-canvas'],
        },
        layout: {
          type: 'dagre',
          rankdir: 'LR',
          align: 'UL',
          nodesepFunc: (node: TestGraphNode) => {
            return 10; //nodeHeight(node)/2;
            //node.getInEdges().map(e => e.getTarget().get)
          },
          ranksepFunc: (node: TestGraphNode) => {
            return 30;
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
      if (!node) { throw new Error();}
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
      collapseMarker(ev.item as TestGraphNode, ev.target,  graph);
      graph.layout();
    });

    // Listen to the selector, change the mode when the selector is changed
    selector.addEventListener('change', (e) => {
      // @ts-ignore
      const value = e.target.value;

      let dataToUse;
      // change the behavior mode
      switch (value) {
        case 'data0':
          dataToUse = data0;
          break;
        case 'data2':
          dataToUse = data2;
          break;
        case 'data3':
          dataToUse = data3;
          break;
        case 'data4':
          dataToUse = data4;
          break;
        case 'data5':
          dataToUse = data5;
          break;
        case 'data6':
          dataToUse = data6;
          break;
        case 'data7':
          dataToUse = data7;
          break;
        default:
          console.log("no data for selection " + value + " found");
          dataToUse = data;
      }

      graph.data(dataToUse);
      graph.render();
      defaultView(graph, dataToUse);
      graph.fitView(20);
    });

    // if (typeof window !== 'undefined')
    //   window.onresize = () => {
    //     if (!graph || graph.get('destroyed')) return;
    //     if (!container || !container.scrollWidth || !container.scrollHeight) return;
    //     graph.changeSize(container.scrollWidth, container.scrollHeight - 30);
    // };

    graph.data(data0);
    graph.render();
    defaultView(graph, data0);
    graph.fitView(20);
  }, []);


  return <div ref={ref}> </div>;
}


export default App;
