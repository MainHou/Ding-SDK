const {DingSDk} = require('../index');

test('test DingSDk', () => {
  expect(DingSDk('test')).toBe('hello,DingDing JavaScript SDK');
});
