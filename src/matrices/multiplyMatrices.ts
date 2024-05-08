/**
 * Multiplies two matrices.
 * @param matrixA The first matrix.
 * @param matrixB The second matrix.
 * @returns The resulting matrix.
 * @throws Error if the matrices are not compatible for multiplication.
 */
export function multiplyMatrices(matrixA: number[][], matrixB: number[][]): number[][] {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  // Check if matrices are compatible for multiplication
  if (colsA !== matrixB.length) {
    throw new Error('Matrices are not compatible for multiplication');
  }

  const result: number[][] = [];

  // Iterate through each row of matrixA
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    // Iterate through each column of matrixB
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0;
      // Iterate through each element of corresponding row in matrixA and column in matrixB
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}
