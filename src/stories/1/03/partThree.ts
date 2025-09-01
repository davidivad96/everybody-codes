import { Input } from ".";
import { lcm } from "../../../utils";

const mergeByStepping = (
  r: number,
  m: number,
  r2: number,
  m2: number
): [number, number] => {
  let t = r;
  while ((t - r2) % m2 !== 0) t += m; // bucle simple
  return [t % lcm(m, m2), lcm(m, m2)];
};

export const partThree = (input: Input) => {
  let r = 0,
    m = 1;
  for (const [x, y] of input) {
    const mi = x + y - 1;
    const ri = y - 1;
    [r, m] = mergeByStepping(r, m, ri, mi);
  }
  return r;
};
