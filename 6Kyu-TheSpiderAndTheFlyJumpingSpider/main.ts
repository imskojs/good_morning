import {pipe} from 'rambda'

const EACH_ANGLE = 360 / 8;

const findAngleDist = ([pointA, pointB]: [string, string]): [number, number, number] => {
  const a = pointA.charCodeAt(0);
  const b = pointB.charCodeAt(0);
  const angle = Math.abs(a - b) * EACH_ANGLE;
  return [+pointA[1], +pointB[1], angle];
};

const cosineTheorem = ([a, b, angle]: [number, number, number]): number => {
  const radian = angle * (Math.PI / 180);
  const squared = Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(radian);
  return Math.sqrt(squared);
};

const spiderToFly = (...spiderFly: [string, string]) =>
  pipe(findAngleDist, cosineTheorem)(spiderFly);

export default spiderToFly;
