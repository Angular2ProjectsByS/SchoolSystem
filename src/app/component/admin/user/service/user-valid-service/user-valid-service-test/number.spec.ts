import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

describe("UserValidation - number", () => {

    let uvService : UserValidService;

    beforeAll(() => {
        uvService = new UserValidService(new UserValidationPattern);
    }); 

    it("(45) Normal number", () => {
        let number = "45";
        expect(uvService.validNumber(number)).toBe(true); 
    });

    it("(45a) with letters", () => {
        let number = "45a";
        expect(uvService.validNumber(number)).toBe(true); 
    });

    it("( 45)  with whitespace ahead", () => {
        let number = " 45";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("(45 )  with whitespace after number", () => {
        let number = "45 ";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("(4578)  to long", () => {
        let number = "4578";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("(oo) letters Only", () => {
        let number = "oo";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("(             ) whitespace", () => {
        let number = "             ";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("Empty", () => {
        let number = "";
        expect(uvService.validNumber(number)).toBe(false); 
    });

    it("null", () => {
        let number;
        expect(uvService.validNumber(number)).toBe(false); 
    });

}); 