import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

describe("UserValidService - Pesel", () => {

    let uvService : UserValidService;

    beforeAll(() => {
        uvService = new UserValidService(new UserValidationPattern);
    }); 

    it("94061104852 (Normal Pesel)", () => {
        let pesel = "94061104852";
        expect(uvService.validPesel(pesel)).toBe(true);
    });


    it("94dsfa87789 (Pessel with letters)", () => {
        let pesel = "94dsfa87789";
        expect(uvService.validPesel(pesel)).toBe(false);
    });

    it("940002877891 (Pessel too long)", () => {
        let pesel = "940002877891";
        expect(uvService.validPesel(pesel)).toBe(false);
    });

    it("9400028778 (Pessel to short)", () => {
        let pesel = "9400028778";
        expect(uvService.validPesel(pesel)).toBe(false);
    });


    it("whitespaces (Pesel whitespace)", () => {
        let pesel = "           ";
        expect(uvService.validPesel(pesel)).toBe(false);
    });

    it("null", () => {
        let pesel;
        expect(uvService.validPesel(pesel)).toBe(false);
    });
});