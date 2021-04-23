export const data = {
    nodes: [
        {
            "signature": "MethodSignatureBackedByPsiMethod: testIteratorSkipsInternal_assSep5([])",
            "id": "root",
            "lines": [
                {
                    "code": "Attributes a \u003d new Attributes();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "a.put(\"One\", \"One\");",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "a.put(Attributes.internalKey(\"baseUri\"), \"example.com\");",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "a.put(\"Two\", \"Two\");",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "a.put(Attributes.internalKey(\"another\"), \"example.com\");",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "Iterator\u003cAttribute\u003e it \u003d a.iterator();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.hasNext();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.next().getKey();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.hasNext();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.hasNext();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.next().getKey();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "it.hasNext();",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "int seen \u003d 0;",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "for (Attribute attribute : a) {\n            seen++;\n        }",
                    "callsMethod": false,
                    "addCovered": false
                },
                {
                    "code": "Assertions.assertEquals(2002885854, ((int) (((Attributes) (a)).hashCode())));",
                    "callsMethod": false,
                    "addCovered": false
                }
            ],
            "addCovered": false,
            "nodeLevel": 0
        },
        {
            error: false,
            id: '2',
            signature: 'getIgnoreCase(String key)',
            nodeLevel: 0,
            lines: [
                { code: '成功率' },
                { code: '耗时' },
                { code: '错误数' },
            ],
        },
        {
            error: false,
            id: '3',
            signature: 'indexOfKeyIgnoreCase(String key)',
            nodeLevel: 0,
            lines: [
                { code: '成功率' },
                { code: '耗时' },
                { code: '错误数' },
            ],
        },
    ],
        edges: [
    {
        source: '1',
        target: '2',
        sourceAnchor: 2,
        targetAnchor: 0,
        data: {
            type: 'name1',
        }
    },
    {
        source: '2',
        target: '3',
        sourceAnchor: 1,
        targetAnchor: 3,
        data: {
            type: 'name2',
        }
    }
]
}