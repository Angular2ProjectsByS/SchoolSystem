import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

describe("UserValidation - zipCode", () => {

    let uvService : UserValidService;

    beforeAll(() => {
        uvService = new UserValidService(new UserValidationPattern);
    }); 

    it("(21-307) Normal", () => {
        let zipCode = "21-307";
        expect(uvService.validZipCode(zipCode)).toBe(true); 
    });

    it("(uu-4u5) with letters", () => {
        let zipCode = "uu-4u5";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("( 21-307)  with whitespace ahead", () => {
        let zipCode = " 21-307";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("(21-307 )  with whitespace after zipCode", () => {
        let zipCode = "21-307 ";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("(oo-OOO) letters Only", () => {
        let zipCode = "oo-OOO";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("(             ) whitespace", () => {
        let zipCode = "             ";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("Empty", () => {
        let zipCode = "";
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

    it("null", () => {
        let zipCode;
        expect(uvService.validZipCode(zipCode)).toBe(false); 
    });

}); 