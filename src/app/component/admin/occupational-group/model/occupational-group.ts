import { BaseDetail } from '@app/model/school-classes/details/base-detail';
import { User } from "@app/component/admin/user/model/user";
import { SchoolClass } from "@app/component/admin/school-class/main/SchoolClass";

export class OccupationalGroup {
    
    id : number;
    teacher : User;
    schoolClass : SchoolClass;
    schoolSubject : BaseDetail;
    createDate : Date;

    constructor() {
        this.teacher = new User();
        this.schoolClass = new SchoolClass();
        this.schoolSubject = new BaseDetail();
    }
}
