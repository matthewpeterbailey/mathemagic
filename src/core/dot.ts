/**
 * Returns the dot product of two vectors.
 * @param vectA Vector A as array
 * @param vectB Vector B as array
 */
export const dot = (vectA: number[], vectB: number[]): number => {
  if (vectA.length !== vectB.length) {
    throw new Error('dot() requires two arrays of numbers with the same length');
  }

  return vectA.reduce((sum, value, index) => sum + value * vectB[index], 0);
};
