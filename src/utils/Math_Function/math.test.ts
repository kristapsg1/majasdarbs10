import { add, multiply } from "./math";


test('add 5 + 6 to = 11', () => {
    expect(add(5, 6)).toBe(11);
});

test('multiply 6 * 5 to = 30', () => {
    expect(multiply(6, 5)).toBe(30);
});