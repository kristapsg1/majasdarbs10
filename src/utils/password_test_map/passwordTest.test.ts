import { passwordValidate } from "./password";

describe('Password test', () => {
    it("Is passwords lenght is 8, atlest 1 upprercase, atlest 1 lowercase and special character ", () => {
        const result = passwordValidate('Kristaps1!');

        expect(result).toEqual(true);
    });
    it("If password lenght is atlest 8", () => {
        const result = passwordValidate('Krita1!');

        expect(result).toEqual(false);
    });
    it("If I use just my name in password", () => {
        const result = passwordValidate('Kritaps!');

        expect(result).toEqual(false);
    });
    it("If I use only numbers", () => {
        const result = passwordValidate('1242154651');

        expect(result).toEqual(false);
    });
    it("If password gonna be all the needed characters but the lenght is < 8!", () => {
        const result = passwordValidate('Kr1!');

        expect(result).toEqual(false);
    });
});