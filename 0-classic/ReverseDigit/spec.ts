import reverseDigit from './index';

describe('ReverseDigit', () => {
  const parameters = [
    {
      desc: 'Reverses integer',
      input: {num: 123456789},
      result: {num: 987654321}
    },
    {
      desc: 'Reverses integer containing trailing 0s',
      input: {num: 101032100},
      result: {num: 1230101}
    },
  ];

  parameters.forEach(({desc, input, result}) => {
    test(desc, () => {
      const output = reverseDigit(input.num);
      expect(output).toEqual(result.num);
    });
  });

});
