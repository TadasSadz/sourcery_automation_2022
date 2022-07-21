const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('1, 1, 1 is not triangle', () => {
    expect(isRightTriangle(1, 1, 1)).toBe(false);
});

test('1, 1, 2 is not triangle', () => {
    expect(isRightTriangle(1, 1, 2)).toBe(false);
});

test('1, 1, 3 is not triangle', () => {
    expect(isRightTriangle(1, 1, 3)).toBe(false);
});

test('-1, 1, 1 is not triangle', () => {
    expect(isRightTriangle(-1, 1, 1)).toBe(false);
});

test('a, b, c is not triangle', () => {
    expect(isRightTriangle("a", "b", "c")).toBe(false);
});

test('2.56, 3.74, 4.45 is not triangle', () => {
    expect(isRightTriangle(2.56, 3.74, 4.45)).toBe(false);
});

test('0, 0, 0 is not triangle', () => {
    expect(isRightTriangle(0, 0, 0)).toBe(false);
});

test('a, b, c is not triangle', () => {
    //arrange
    let a = 'a';
    let b = 'b';
    let c = 'c';
    let expected = false;

    //act
    let result = isRightTriangle(a, b, c);

    //assert
    expect(result).toBe(expected);
});