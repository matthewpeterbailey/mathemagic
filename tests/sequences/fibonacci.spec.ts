import { fibonacci } from '../../src/index';

describe('fibonacci function', () => {
  test('calculates the correct Fibonacci number for n=1', () => {
    expect(fibonacci(1)).toEqual(1);
  });

  test('calculates the correct Fibonacci number for n=5', () => {
    expect(fibonacci(5)).toEqual(5);
  });

  test('calculates the correct Fibonacci number for n=10', () => {
    expect(fibonacci(10)).toEqual(55);
  });

  test('calculates the correct Fibonacci number for n=100', () => {
    expect(fibonacci(100)).toEqual(354224848179261915075);
  });

  test('throws an error for n=0', () => {
    expect(() => {
      fibonacci(0);
    }).toThrow('n must be a positive integer');
  });

  test('throws an error for negative n', () => {
    expect(() => {
      fibonacci(-5);
    }).toThrow('n must be a positive integer');
  });
});
