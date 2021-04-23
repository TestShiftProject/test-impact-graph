export const data = {
  "nodes": [
    {
      "signature": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "id": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "lines": [
        {
          "code": "Attributes a \u003d new Attributes();",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "a.put(\"One\", \"One\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "a.put(\"Two\", \"Two\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "a.put(Attributes.internalKey(\"baseUri\"), \"example.com\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "a.put(Attributes.internalKey(\"another\"), \"example.com\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "a.size();",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: size([])",
          "addCovered": false
        },
        {
          "code": "Assertions.assertEquals(1117389020, ((int) (((Attributes) (a)).hashCode())));",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: assertEquals([PsiType:int, PsiType:int])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 0
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "int i \u003d indexOfKey(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
          "addCovered": false
        },
        {
          "code": "if (i !\u003d NotFound)             vals[i] \u003d value;         else             add(key, value);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: size([])",
      "id": "MethodSignatureBackedByPsiMethod: size([])",
      "lines": [
        {
          "code": "int s \u003d 0;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (!isInternalKey(keys[i]))                 s++;         }",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: isInternalKey([PsiType:String])",
          "addCovered": false
        },
        {
          "code": "return s;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: assertEquals([PsiType:int, PsiType:int])",
      "id": "MethodSignatureBackedByPsiMethod: assertEquals([PsiType:int, PsiType:int])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 1
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "lines": [
        {
          "code": "Validate.notNull(key);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "for (int i \u003d 0; i \u003c size; i++) {             if (key.equals(keys[i]))                 return i;         }",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
          "addCovered": false
        },
        {
          "code": "return NotFound;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "lines": [
        {
          "code": "checkCapacity(size + 1);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
          "addCovered": false
        },
        {
          "code": "keys[size] \u003d key;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "vals[size] \u003d value;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "size++;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "return this;",
          "callsMethod": false,
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: isInternalKey([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: isInternalKey([PsiType:String])",
      "lines": [
        {
          "code": "return key !\u003d null \u0026\u0026 key.length() \u003e 1 \u0026\u0026 key.charAt(0) \u003d\u003d InternalPrefix;",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: length([])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 2
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "id": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "id": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "id": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "id": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "lines": [
        {
          "code": "if (obj \u003d\u003d null)             throw new IllegalArgumentException(\"Object must not be null\");",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "id": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "id": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "lines": [
        {
          "code": "Validate.isTrue(minNewSize \u003e\u003d size);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
          "addCovered": false
        },
        {
          "code": "int curSize \u003d keys.length;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (curSize \u003e\u003d minNewSize)             return;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "int newSize \u003d curSize \u003e\u003d InitialCapacity ? size * GrowthFactor : InitialCapacity;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "if (minNewSize \u003e newSize)             newSize \u003d minNewSize;",
          "callsMethod": false,
          "addCovered": false
        },
        {
          "code": "keys \u003d Arrays.copyOf(keys, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        },
        {
          "code": "vals \u003d Arrays.copyOf(vals, newSize);",
          "callsMethod": true,
          "calledMethod": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
          "addCovered": false
        }
      ],
      "addCovered": false,
      "nodeLevel": 3
    },
    {
      "signature": "MethodSignatureBackedByPsiMethod: length([])",
      "id": "MethodSignatureBackedByPsiMethod: length([])",
      "lines": [],
      "addCovered": false,
      "nodeLevel": 3
    }
  ],
  "edges": [
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "sourceAnchor": 4,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "sourceAnchor": 5,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: size([])",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: testSizeWhenHasInternal_assSep6([])",
      "target": "MethodSignatureBackedByPsiMethod: assertEquals([PsiType:int, PsiType:int])",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: put([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "sourceAnchor": 3,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: size([])",
      "target": "MethodSignatureBackedByPsiMethod: isInternalKey([PsiType:String])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: indexOfKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: equals([PsiType:Object])",
      "sourceAnchor": 2,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: add([PsiType:String, PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: isInternalKey([PsiType:String])",
      "target": "MethodSignatureBackedByPsiMethod: length([])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 7,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: notNull([PsiType:Object])",
      "target": "MethodSignatureBackedByPsiMethod: IllegalArgumentException([PsiType:String])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: isTrue([PsiType:boolean])",
      "sourceAnchor": 1,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 6,
      "targetAnchor": 0
    },
    {
      "source": "MethodSignatureBackedByPsiMethod: checkCapacity([PsiType:int])",
      "target": "MethodSignatureBackedByPsiMethod: \u003cT\u003ecopyOf([PsiType:T[], PsiType:int])",
      "sourceAnchor": 7,
      "targetAnchor": 0
    }
  ]
};
