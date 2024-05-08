import { multiplyMatrices } from '../../src/index'; // Replace 'your-package-name' with the actual package name

describe('multiplyMatrices', () => {
  test('should multiply two compatible matrices correctly', () => {
    const matrixA = [
      [1, 2],
      [3, 4],
    ];
    const matrixB = [
      [5, 6],
      [7, 8],
    ];
    const expected = [
      [19, 22],
      [43, 50],
    ];
    expect(multiplyMatrices(matrixA, matrixB)).toEqual(expected);
  });

  test('should throw error for incompatible matrices', () => {
    const matrixA = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const matrixB = [
      [1, 2],
      [3, 4],
    ];
    expect(() => multiplyMatrices(matrixA, matrixB)).toThrowError('Matrices are not compatible for multiplication');
  });
});
