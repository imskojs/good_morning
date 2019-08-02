import numberOfDigits from './index'

describe('NumberOfDigits', () => {
  const params = [
    {
      desc: 'counts number of digits for integers',
      input: 1238123,
      result: 7
    },
    {
      desc: 'counts number of digits for integers with trailing 0s',
      input: 1238123000,
      result: 10
    },
  ];

  params.forEach(({desc, input, result}) => {
    test(desc, () => {
      const out = numberOfDigits(input);
      expect(out).toEqual(result)
    })
  })
});
