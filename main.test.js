const { isWork, capitalize, reverse, calculator, caesarCipher, analyzeArray } = require('./main.js');

test('is working at all', () => {
    expect(isWork()).toBe(1);
})



test('capitalize single character', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('b')).toBe('B');
})

test('capitalize first of multiple characters', () => {
    expect(capitalize('abcd')).toBe('Abcd');
    expect(capitalize('mister malevolence')).toBe('Mister malevolence');
})


test('reverse string', () => {
    expect(reverse('z')).toBe('z');
    expect(reverse('abcd')).toBe('dcba');
    expect(reverse('argh my face')).toBe('ecaf ym hgra');
})


test('calculator exists', () => {
    expect(calculator).toBeTruthy();
})

test('calculator adds', () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.add(4,4)).toBe(8);
    expect(calculator.add(324,17)).toBe(341);
})

test('calculator subtracts', () => {
    expect(calculator.subtract(4,1)).toBe(3);
    expect(calculator.subtract(13,6)).toBe(7);
    expect(calculator.subtract(477,7)).toBe(470);
})

test('calculator divides', () => {
    expect(calculator.divide(4,2)).toBe(2);
    expect(calculator.divide(16,2)).toBe(8);
    expect(calculator.divide(300,15)).toBe(20);
})

test('calculator multiplies', () => {
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.multiply(10,2)).toBe(20);
    expect(calculator.multiply(36,8)).toBe(288);
})


test('caesar shift single letter', () => {
    expect(caesarCipher('a', 3)).toBe('d');
    expect(caesarCipher('a', 4)).toBe('e');
    expect(caesarCipher('A', 4)).toBe('E');

    expect(caesarCipher('w', 5)).toBe('b');
    expect(caesarCipher('z', 1)).toBe('a');
    expect(caesarCipher('W', 5)).toBe('B');

    expect(caesarCipher(' ', 1)).toBe(' ');
    expect(caesarCipher(' ', 8)).toBe(' ');
    expect(caesarCipher('?', 4)).toBe('?');
})

test('caesar shift multiple characters', () => {
    expect(caesarCipher('abc',3)).toBe('def');
    expect(caesarCipher('Bobert',1)).toBe('Cpcfsu');
    expect(caesarCipher('xylo- me',5)).toBe('cdqt- rj');
})


test('analyze array returns object of properties', () => {
    expect(analyzeArray([1,2,3])).toHaveProperty('average');
    expect(analyzeArray([1,2,3])).toHaveProperty('min');
    expect(analyzeArray([1,2,3])).toHaveProperty('max');
    expect(analyzeArray([1,2,3])).toHaveProperty('length');
})

test('analyze array returns minimum number', () => {
    expect(analyzeArray([1,2,3])).toHaveProperty('min', 1);
    expect(analyzeArray([5,4,8])).toHaveProperty('min', 4);
})

test('analyze array returns maximum number', () => {
    expect(analyzeArray([1,2,3])).toHaveProperty('max', 3);
    expect(analyzeArray([5,4,8])).toHaveProperty('max', 8);
})

test('analyze array returns length', () => {
    expect(analyzeArray([1,2,3])).toHaveProperty('length', 3);
    expect(analyzeArray([5,4,8,19,0,1])).toHaveProperty('length', 6);
})

test('analyze array returns average', () => {
    expect(analyzeArray([1,2,3])).toHaveProperty('average', 2);
    expect(analyzeArray([5,4,8,17,1])).toHaveProperty('average', 7);
})