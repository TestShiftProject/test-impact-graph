import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { data } from './data';
import { NodeTooltips, EdgeToolTips, NodeContextMenu } from './component'
import './App.css';
import G6 from '@antv/g6';
import { testNode } from './component/testNode'

const ICON_MAP = {
  a: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*0HC-SawWYUoAAAAAAAAAAABkARQnAQ',
  b: 'https://gw.alipayobjects.com/mdn/rms_8fd2eb/afts/img/A*sxK0RJ1UhNkAAAAAAAAAAABkARQnAQ',
};

function setupG6() {
  G6.registerNode(
  'card-node',
  {
    drawShape: function drawShape(cfg, group) {
      const color = cfg.error ? '#F4664A' : '#30BF78';
      const r = 2;
      const shape = group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 60,
          stroke: color,
          radius: r,
        },
        name: 'main-box',
        draggable: true,
      });

      group.addShape('rect', {
        attrs: {
          x: 0,
          y: 0,
          width: 200,
          height: 20,
          fill: color,
          radius: [r, r, 0, 0],
        },
        name: 'title-box',
        draggable: true,
      });

      // left icon
      group.addShape('image', {
        attrs: {
          x: 4,
          y: 2,
          height: 16,
          width: 16,
          cursor: 'pointer',
          img: ICON_MAP[cfg.nodeType || 'app'],
        },
        name: 'node-icon',
      });

      // title text
      group.addShape('text', {
        attrs: {
          textBaseline: 'top',
          y: 2,
          x: 24,
          lineHeight: 20,
          text: cfg.title,
          fill: '#fff',
        },
        name: 'title',
      });

      if (cfg.nodeLevel > 0) {
        group.addShape('marker', {
          attrs: {
            x: 184,
            y: 30,
            r: 6,
            cursor: 'pointer',
            symbol: cfg.collapse ? G6.Marker.expand : G6.Marker.collapse,
            stroke: '#666',
            lineWidth: 1,
          },
          name: 'collapse-icon',
        });
      }

      // The content list
      cfg.panels.forEach((item, index) => {
        // name text
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 25,
            x: 24 + index * 60,
            lineHeight: 20,
            text: item.title,
            fill: 'rgba(0,0,0, 0.4)',
          },
          name: `index-title-${index}`,
        });

        // value text
        group.addShape('text', {
          attrs: {
            textBaseline: 'top',
            y: 42,
            x: 24 + index * 60,
            lineHeight: 20,
            text: item.value,
            fill: '#595959',
          },
          name: `index-title-${index}`,
        });
      });
      return shape;
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
        width: 1200,
        height: 800,
        modes: {
          default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
        },
        layout: {
          type: 'dagre',
          direction: 'LR',
        },
        defaultNode: testNode,
        defaultEdge: {
          type: 'cubic-vertical',
          style: {
            stroke: '#F6BD16',
          },
        },
      });
    }
  // Listen to the mouse event on node
  graph.on('node:mouseenter', (evt) => {
    const { item } = evt;
    const model = item.getModel();
    const { x, y } = model;
    const point = graph.getCanvasByPoint(x, y);

    setNodeToolTipX(point.x - 75);
    setNodeToolTipY(point.y + 15);
    setShowNodeTooltip(true);
  });

  // Hide the tooltip and the contextMenu when the mouseleave event is activated on the node
  graph.on('node:mouseleave', () => {
    setShowNodeTooltip(false);
  });

    graph.data(data);
    graph.render();
  }, []);

  return <div ref={ref}>{showNodeTooltip && <NodeTooltips x={nodeTooltipX} y={nodeTooltipY} />}</div>;
}


export default App;
