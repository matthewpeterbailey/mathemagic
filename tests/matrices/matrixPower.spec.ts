import { matrixPower } from '../../src/matrices/matrixPower'; // Adjust the import path as needed

describe('matrixPower', () => {
  test('should calculate the power of a matrix correctly', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const power = 3;
    const expectedResult = [
      [37, 54],
      [81, 118],
    ];

    const result = matrixPower(matrix, power);
    expect(result).toEqual(expectedResult);
    expect(result).not.toBe(matrix); // Ensure the original matrix is not mutated
  });

  test('should throw error for non-square matrix', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const power = 2;
    expect(() => matrixPower(matrix, power)).toThrowError('Input matrix must be square');
  });
});
