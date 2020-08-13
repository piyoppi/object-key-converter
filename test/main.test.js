import { convertKey } from './../src/main.js';

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

describe('#convertKey', () => {
  it('convert', () => {
    const obj = {
      hoge: 1,
      fuga: 2,
      piyo: {
        foo: 3,
        bar: 4
      },
      baz: 5
    };
    const actual = convertKey(obj, map, false);

    expect(actual).toEqual({
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      },
      baz: 5
    });
  });

  it('reverse convert', () => {
    const obj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4
      },
      f: 5
    };
    const actual = convertKey(obj, map, true);

    expect(actual).toEqual({
      hoge: 1,
      fuga: 2,
      piyo: {
        foo: 3,
        bar: 4
      },
      f: 5
    });
  });
});
