import { helloFunction } from './index.js';

test('Testing jest config', () => {
  expect(helloFunction()).toBe('hello');
});
