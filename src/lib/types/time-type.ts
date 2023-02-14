/**
 * Represent a string like `14:42:34`
 */
type HDigit1 = 0 | 1;
type HDigit2 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type ZeroToFour = 0 | 1 | 2 | 3 | 4;
type HH = `${HDigit1}${HDigit2}` | `2${ZeroToFour}`;
type MS1 = 0 | 1 | 2 | 3 | 4 | 5;
type MS2 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type MmSs = `${MS1}${MS2}`;
export type TimeType = `${HH}:${MmSs}:${MmSs}`;
