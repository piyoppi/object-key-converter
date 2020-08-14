# @piyoppi/object-key-converter

## Install

```
npm install --save @piyoppi/object-key-converter
```

## Example

```js
import { convertKey } from '@piyoppi/object-key-converter';

const map = [
  ['hoge', 'a'],
  ['fuga', 'b'],
  ['piyo', 'c',
    [
      ['foo', 'd'],
      ['bar', 'e']
    ]
  ]
];

const obj = {
  hoge: 1,
  fuga: 2,
  piyo: {
    foo: 3,
    bar: 4
  },
  baz: 5
};

console.log(convertKey(obj, map, false));

// log output:
//
// {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: 4
//   },
//   baz: 5
// }
```

---

```js
import { convertKey } from '@piyoppi/object-key-converter';

const map = [
  ['hoge', 'a'],
  ['fuga', 'b'],
  ['piyo', 'c',
    [
      ['foo', 'd'],
      ['bar', 'e']
    ]
  ]
];

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4
  },
  f: 5
};

console.log(convertKey(obj, map, true));

// log output:
//
// {
//   hoge: 1,
//   fuga: 2,
//   piyo: {
//     foo: 3,
//     bar: 4
//   },
//   f: 5
// }
```
