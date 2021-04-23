export const dataNew = {
  "nodes": [
    {
      "signature": "testSizeWhenHasInternal_assSep6",
      "id": "testSizeWhenHasInternal_assSep6",
      "lines": [
        {
          "code": "Attributes a \u003d new Attributes();",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "a.put(\"One\", \"One\");",
          "callsMethod": true,
          "calledMethod": "put",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "a.put(\"Two\", \"Two\");",
          "callsMethod": true,
          "calledMethod": "put",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "a.put(Attributes.internalKey(\"baseUri\"), \"example.com\");",
          "callsMethod": true,
          "calledMethod": "put",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "a.put(Attributes.internalKey(\"another\"), \"example.com\");",
          "callsMethod": true,
          "calledMethod": "put",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "a.size();",
          "callsMethod": true,
          "calledMethod": "size",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "Assertions.assertEquals(1117389020, ((int) (((Attributes) (a)).hashCode())));",
          "callsMethod": true,
          "calledMethod": "assertEquals",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 0
    },
    {
      "signature": "put",
      "id": "put",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "indexOfKey",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "add",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "put",
      "id": "put",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "indexOfKey",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "add",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "put",
      "id": "put",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "indexOfKey",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "add",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "put",
      "id": "put",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "indexOfKey",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "add",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "size",
      "id": "size",
      "lines": [
        {
          "code": "int s \u003d 0;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (!isInternalKey(keys[i]))                 s++;         }",
          "callsMethod": true,
          "calledMethod": "isInternalKey",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return s;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "assertEquals",
      "id": "assertEquals",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "indexOfKey",
      "id": "indexOfKey",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "equals",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "add",
      "id": "add",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "checkCapacity",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "indexOfKey",
      "id": "indexOfKey",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "equals",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "add",
      "id": "add",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "checkCapacity",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "indexOfKey",
      "id": "indexOfKey",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "equals",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "add",
      "id": "add",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "checkCapacity",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "indexOfKey",
      "id": "indexOfKey",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "notNull",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "equals",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "add",
      "id": "add",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "checkCapacity",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "isInternalKey",
      "id": "isInternalKey",
      "lines": [
        {
          "code": "return key !\u003d null \u0026\u0026 key.length() \u003e 1 \u0026\u0026 key.charAt(0) \u003d\u003d InternalPrefix;",
          "callsMethod": true,
          "calledMethod": "length",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "IllegalArgumentException",
      "id": "IllegalArgumentException",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "equals",
      "id": "equals",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "checkCapacity",
      "id": "checkCapacity",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "isTrue",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "IllegalArgumentException",
      "id": "IllegalArgumentException",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "equals",
      "id": "equals",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "checkCapacity",
      "id": "checkCapacity",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "isTrue",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "IllegalArgumentException",
      "id": "IllegalArgumentException",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "equals",
      "id": "equals",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "checkCapacity",
      "id": "checkCapacity",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "isTrue",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "IllegalArgumentException",
      "id": "IllegalArgumentException",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "notNull",
      "id": "notNull",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "IllegalArgumentException",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "equals",
      "id": "equals",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "checkCapacity",
      "id": "checkCapacity",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "isTrue",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "covered": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "copyOf",
          "covered": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "length",
      "id": "length",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    }
  ],
  "edges": [
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "put",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "put",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "put",
      "sourceAnchor": 4,
      "targetAnchor": 0
    },
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "put",
      "sourceAnchor": 5,
      "targetAnchor": 0
    },
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "size",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "testSizeWhenHasInternal_assSep6",
      "target": "assertEquals",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "indexOfKey",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "add",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "indexOfKey",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "add",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "indexOfKey",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "add",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "indexOfKey",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "put",
      "target": "add",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "size",
      "target": "isInternalKey",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "equals",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "add",
      "target": "checkCapacity",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "equals",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "add",
      "target": "checkCapacity",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "equals",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "add",
      "target": "checkCapacity",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "notNull",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "indexOfKey",
      "target": "equals",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "add",
      "target": "checkCapacity",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "isInternalKey",
      "target": "length",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "isTrue",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "isTrue",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "isTrue",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "notNull",
      "target": "IllegalArgumentException",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "isTrue",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "checkCapacity",
      "target": "copyOf",
      "sourceAnchor": 7,
      "targetAnchor": 0
    }
  ]
};