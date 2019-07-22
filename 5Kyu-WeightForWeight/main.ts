class IndexValue {
  constructor(
    public index: number,
    public value: string
  ) {
  }
}

const addStr = (str: string): number => {
  return str.split('')
    .reduce((curr: number, next: string) => curr + +next, 0);
};

const sortBy = (a: IndexValue, b: IndexValue) => {
  if (a.index === b.index) {
    if ('a' + a.value > 'a' + b.value) {
      return 1
    } else if ('a' + a.value < 'a' + b.value) {
      return -1
    }
    return 0
  }
  return a.index - b.index;
};

const orderWeight = (strs: string): string => {
  return strs.split(' ')
    .map((str: string) => new IndexValue(addStr(str), str))
    .sort((a: IndexValue, b: IndexValue) => sortBy(a, b))
    .map((val: IndexValue) => val.value)
    .join(' ');
};

export default orderWeight;
