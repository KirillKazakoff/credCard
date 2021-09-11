import { getCheckDigit } from '../../lib/utils';

test('return 3', () => {
    const expected = 3;
    const result = getCheckDigit('7992739871');
    expect(result).toBe(expected);
});
