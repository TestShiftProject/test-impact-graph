export const data = {
  nodes: [
    {
      title: 'node2',
      error: false,
      id: '1',
      label: 'testIteratorEmpty_mg17_assSep113testIteratorEmpty_mg17_assSep113()',
      nodeLevel: 2,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      x: 100,
      y: 100,
    },
    {
      title: 'node2',
      error: false,
      id: '2',
      label: 'getIgnoreCase(String key)',
      nodeLevel: 0,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      x: 100,
      y: 200,
    },
    {
      title: 'node2',
      error: false,
      id: '3',
      label: 'indexOfKeyIgnoreCase(String key)',
      nodeLevel: 0,
      panels: [
        { title: '成功率', value: '11%' },
        { title: '耗时', value: '111' },
        { title: '错误数', value: '111' },
      ],
      x: 100,
      y: 200,
    },
  ],
  edges: [
    {
      source: '1',
      target: '2',
      data: {
        type: 'name1',
      }
    },
    {
      source: '2',
      target: '3',
      data: {
        type: 'name2',
      }
    }
  ]
};
