const fn = require('./fn');

test('1 is 1', () => {
  expect(1).toBe(1);
})

test('2 + 3 == 5', () => {
  expect(fn.add(2, 3)).toBe(5);
})

test('3 + 3 != 5', () => {
  expect(fn.add(3, 3)).not.toBe(5);
})

test('유저 객체 검증', () => {
  expect(fn.makeUser('Mike', 30)).toEqual({
    name: 'Mike',
    age: 30,
  });
})

test('유저 객체 검증', () => {
  expect(fn.makeUser('Mike', 30)).not.toStrictEqual({
    name: 'Mike',
    age: 30,
  });
})
