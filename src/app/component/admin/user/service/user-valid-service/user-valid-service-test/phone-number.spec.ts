import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

fdescribe("UserValidation - phoneNumber", () => {

    let uvService : UserValidService;

    beforeAll(() => {
        uvService = new UserValidService(new UserValidationPattern);
    }); 

    it("(502037198) Normal phone number", () => {
        let phoneNumber = "502037198";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(true); 
    });

    it("(45w89r9ww8) with letters", () => {
        let phoneNumber = "45w89r9ww8";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

    it("( 502037198)  with whitespace ahead", () => {
        let phoneNumber = " 502037198";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false);
    });

    it("(502037198 )  with whitespace after phoneNumber", () => {
        let phoneNumber = "502037198 ";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

    it("(oosdfadsfadsfadfasdf) letters Only", () => {
        let phoneNumber = "oosdfadsfadsfadfasdf";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

    it("(             ) whitespace", () => {
        let phoneNumber = "             ";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

    it("Empty", () => {
        let phoneNumber = "";
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

    it("null", () => {
        let phoneNumber;
        expect(uvService.validPhoneNumber(phoneNumber)).toBe(false); 
    });

}); 