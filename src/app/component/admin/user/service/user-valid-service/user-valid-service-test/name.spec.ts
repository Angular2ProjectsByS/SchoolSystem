import { UserValidService } from "@app/component/admin/user/service/user-valid-service/user-valid-service";
import { UserValidationPattern } from "@app/component/admin/user/service/model/user-validation-pattern";

describe("UserValidation - name", () => {

    let uvService : UserValidService;

    beforeAll(() => {
        uvService = new UserValidService(new UserValidationPattern);
    }); 

    it("(Nurzyński) Normal Name with polish letters", () => {
        let name = "Nurzyński";
        expect(uvService.validName(name)).toBe(true); 
    });

    it("(Nurzyńska-Biernat) Two-parted body name", () => {
        let name = "Nurzyńska-Biernat";
        expect(uvService.validName(name)).toBe(true); 
    });

    it("(Nu3zy3ski) with numbers", () => {
        let name = "Nu3zy3ski";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("( Nurzyński)  with whitespace ahead", () => {
        let name = " Nurzyński";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("(Nurzyński)  with whitespace after name", () => {
        let name = "Nurzyński ";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("(36548895487) Numbers Only", () => {
        let name = "36548895487";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("(             ) whitespace", () => {
        let name = "             ";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("Empty", () => {
        let name = "";
        expect(uvService.validName(name)).toBe(false); 
    });

    it("null", () => {
        let name;
        expect(uvService.validName(name)).toBe(false); 
    });

}); 