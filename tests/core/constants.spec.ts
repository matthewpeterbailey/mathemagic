import {
  tau,
  pi,
  sqrt2,
  sqrt3,
  sqrtHalf,
  phi,
  e,
  ln2,
  ln10,
  log2e,
  log10e,
  zeta3,
  A,
  gamma,
  M1,
} from '../../src/index';

test('Constants should be constant', () => {
  expect(tau).toEqual(6.283185307179586);
  expect(pi).toEqual(3.141592653589793);
  expect(sqrt2).toEqual(1.4142135623730951);
  expect(sqrt3).toEqual(1.7320508075688772);
  expect(sqrtHalf).toEqual(0.7071067811865476);
  expect(phi).toEqual(1.618033988749895);
  expect(e).toEqual(2.718281828459045);
  expect(ln2).toEqual(0.6931471805599453);
  expect(ln10).toEqual(2.302585092994046);
  expect(log2e).toEqual(1.4426950408889634);
  expect(log10e).toEqual(0.4342944819032518);
  expect(zeta3).toEqual(1.2020569);
  expect(A).toEqual(1.2824271291);
  expect(gamma).toEqual(0.5772156649015329);
  expect(M1).toEqual(0.2614972128476428);
});
