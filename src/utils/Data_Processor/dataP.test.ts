import { processData } from "./dataP";


test("Saskaitis visus masiva elementus kopa!", () => {
    expect(processData([2, 1, 4, 5, 7, 6])).toBe(25);
});