import { emailValidate } from "./email";

describe("email", () => {
    it("Email have @ symbol", () => {
        const result = emailValidate('kristapsgmail.com');

        expect(result).toEqual(false);
    });
    it("Email is writen in 1 sentence", () => {
        const result = emailValidate('Viensteikums');

        expect(result).toEqual(false);
    });
    it("If there is spcace in email", () => {
        const result = emailValidate('kristaps @gmail.com');

        expect(result).toEqual(false);
    });
    it("If email is writen like this - example.one@example.com", () => {
        const result = emailValidate('krsitaps.z-g1234@gmail.com');

        expect(result).toEqual(true);
    });
    it('If there is writen two countries .com.lv', () => {
        const result = emailValidate('kristaps@gmail.com.lv');

        expect(result).toEqual(true);
    });
});