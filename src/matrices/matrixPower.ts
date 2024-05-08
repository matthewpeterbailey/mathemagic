import { multiplyMatrices } from '../../src/index';

/**
 * Calculates the power of a square matrix.
 * @param matrix The input square matrix.
 * @param power The exponent to which the matrix is raised.
 * @returns The resulting matrix.
 * @throws Error if the input matrix is not square.
 */
export function matrixPower(matrix: number[][], power: number): number[][] {
  // Check if the matrix is square
  const n = matrix.length;
  if (matrix.some((row) => row.length !== n)) {
    throw new Error('Input matrix must be square');
  }

  // Initialize result matrix as an identity matrix
  let result: number[][] = [];
  for (let i = 0; i < n; i++) {
    result[i] = [];
    for (let j = 0; j < n; j++) {
      result[i][j] = i === j ? 1 : 0;
    }
  }

  // Multiply matrix 'power' times
  while (power > 0) {
    if (power % 2 === 1) {
      result = multiplyMatrices(result, matrix);
    }
    matrix = multiplyMatrices(matrix, matrix);
    power = Math.floor(power / 2);
  }

  return result;
}
