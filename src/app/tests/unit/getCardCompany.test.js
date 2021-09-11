import { getCardCompany } from '../../lib/utils';

test('getMir', () => {
    const expected = 'mir';
    const result = getCardCompany('2200770212727079');
    expect(result).toBe(expected);
});

test('getDinners', () => {
    const expected = 'dinners-club';
    const result = getCardCompany('30444450010354');
    expect(result).toBe(expected);
});

test('getJcb', () => {
    const expected = 'jcb';
    const result = getCardCompany('3589259835072724');
    expect(result).toBe(expected);
});

test('getAmericanExpress', () => {
    const expected = 'american-express';
    const result = getCardCompany('344587413859449');
    expect(result).toBe(expected);
});

test('getVisa', () => {
    const expected = 'visa';
    const result = getCardCompany('4024007165824979');
    expect(result).toBe(expected);
});

test('getMasterCard', () => {
    const expected = 'master-card';
    const result = getCardCompany('5192772303587134');
    expect(result).toBe(expected);
});

test('getDiscover', () => {
    const expected = 'discover';
    const result = getCardCompany('6011215456768157');
    expect(result).toBe(expected);
});
