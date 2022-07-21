const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('1, 1, 1 is triangle', () => {
    expect(isTriangle(1, 1, 1)).toBe(true);
});

test('-1, -1, -1 is not triangle', () => {
    expect(isTriangle(-1, -1, -1)).toBe(false);
});

test('1, 1, 3 is not triangle', () => {
    expect(isTriangle(1, 1, 3)).toBe(false);
});


test('a, 2, 3 is not triangle', () => {
    expect(isTriangle("a", 2, -3)).toBe(false);
});

test('2.56, 3.74, 4.45 is triangle', () => {
    expect(isTriangle(2.56, 3.74, 4.45)).toBe(true);
});

test('0, 0, 0 is not triangle', () => {
    expect(isTriangle(0, 0, 0)).toBe(false);
});

