import { dot } from '../../src/index';

test('Dot product', () => {
  const vectorA: number[] = [1, 2, 3];
  let vectorB: number[] = [4, 5, 6];
  expect(dot(vectorA, vectorB)).toBe(32);

  vectorB = [45, 56, 67];
  expect(dot(vectorA, vectorB)).toBe(358);
});

test('Dot product should handle mismatched lengths', () => {
  expect(() => {
    dot([1, 2], [3, 4, 5]);
  }).toThrow(new Error('dot() requires two arrays of numbers with the same length'));
});
