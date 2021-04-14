import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import data from './graphData.json';
import {NodeTooltips, EdgeToolTips, NodeContextMenu} from './component'
import './App.css';
import G6 from '@antv/g6';
import {testNode} from './component/testNode'
import {getAllChildren} from "./util";

const ICON_MAP = {
  a: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ',
  b: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ',
};

function setupG6() {
  G6.registerNode(
    'card-node',
    {
      drawShape: function drawShape(cfg, group) {
        const color = '#3c3f41';
        const coveredColor = '#80b380';
        const additionallyCoveredColor = '#52e052';
        const backgroundColor = '#d9d9d9';
        const lineHeight = 20;
        const width = 500;
        const r = 2;
        const shape = group.addShape('rect', {
          attrs: {
            x: 0,
            y: 0,
            width: width,
            height: lineHeight + cfg.lines.length * lineHeight,
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

        // // left icon
        // group.addShape('image', {
        //   attrs: {
        //     x: 4,
        //     y: 2,
        //     height: 16,
        //     width: 16,
        //     cursor: 'pointer',
        //     img: ICON_MAP[cfg.nodeType || 'app'],
        //   },
        //   name: 'node-icon',
        //   visOnCollapse: true,
        // });

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


        // The content list
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
                symbol: G6.Marker.expand,  //cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
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


          // // value text
          // group.addShape('text', {
          //   attrs: {
          //     textBaseline: 'top',
          //     y: 42 + index * 60,
          //     x: 24,
          //     lineHeight: 20,
          //     text: item.value,
          //     fill: '#3c3f41',
          //   },
          //   name: `index-title-${index}`,
          // });
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


function App() {
  setupG6();

  const ref = React.useRef(null);
  let graph = null;

  // The coordinate of node tooltip
  const [showNodeTooltip, setShowNodeTooltip] = useState(false);
  const [nodeTooltipX, setNodeToolTipX] = useState(0);
  const [nodeTooltipY, setNodeToolTipY] = useState(0);

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
          direction: 'TB',
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

    // Listen to the mouse event on node
    graph.on('node:mouseenter', (evt) => {
      const {item} = evt;
      const model = item.getModel();
      const {x, y} = model;
      const point = graph.getCanvasByPoint(x, y);

      setNodeToolTipX(point.x - 75);
      setNodeToolTipY(point.y + 15);
      setShowNodeTooltip(true);
    });

    // Hide the tooltip and the contextMenu when the mouseleave event is activated on the node
    graph.on('node:mouseleave', () => {
      setShowNodeTooltip(false);
    });

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
      const node = ev.item;
      console.log(node)
      const outgoingEdge = graph.find('edge', (edge) => {
        return edge.get('model').source === node.get('id') && edge.get('model').sourceAnchor === ev.target.cfg.index + 1
      });
      console.log(outgoingEdge)
      const nextNode = graph.find('node', (node) => {
        return node.get('id') === outgoingEdge.get('model').target
      })
      console.log(nextNode)
      const children = getAllChildren(graph, nextNode);
      if (ev.target.cfg.collapse) {
        graph.showItem(nextNode);
        children.forEach((c) => graph.showItem(c));
        // graph.updateItem(ev.target, {
        //   attrs: {
        //     symbol: G6.Marker.collapse
        //   }
        // });
      } else {
        graph.hideItem(nextNode);
        children.forEach((c) => graph.hideItem(c));
        // graph.updateItem(ev.target, {
        //   attrs: {
        //     symbol: G6.Marker.expand
        //   }
        // });
      }
      ev.target.cfg.collapse = !ev.target.cfg.collapse;
    });

    console.log(data);
    graph.data(data);
    graph.render();
  }, []);


  return <div ref={ref}>{showNodeTooltip && <NodeTooltips x={nodeTooltipX} y={nodeTooltipY}/>}</div>;
}


export default App;
