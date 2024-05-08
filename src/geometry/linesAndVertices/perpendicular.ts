import { Point } from '../../core/point';
import { normalize } from './normalize';

/**
 * Returns the normalised vector of the line perpendicular to the line represented by points A and B
 * @param a Point A
 * @param b Point B
 */
export const perpendicular = (a: Point, b: Point): Point => {
  const dx = a.x - b.x;
  const dy = a.y - b.y;

  return normalize({ x: dy, y: -dx });
};
