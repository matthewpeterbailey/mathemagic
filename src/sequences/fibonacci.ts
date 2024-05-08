import { matrixPower } from '../../src/index';
/**
 * Calculates the n-th Fibonacci number using matrix exponentiation.
 * @param n The position of the Fibonacci number to calculate (must be a positive integer).
 * @returns The n-th Fibonacci number.
 */
export const fibonacci = (n: number): number => {
  // Check if n is a positive integer
  if (n <= 0) {
    throw new Error('n must be a positive integer');
  }

  // Initial matrix for Fibonacci calculation
  const initialMatrix = [
    [1, 1],
    [1, 0],
  ];
  // Calculate the power of the matrix to get the n-th Fibonacci number
  const resultMatrix = matrixPower(initialMatrix, n - 1);
  return resultMatrix[0][0];
};
