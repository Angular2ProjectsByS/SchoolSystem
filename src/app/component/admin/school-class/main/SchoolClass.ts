import { BaseDetail } from '@app/model/school-classes/details/base-detail';
import { User } from '@app/component/admin/user/model/user';

export class SchoolClass {
    id : number;
    startDate : Date;
    classSpecializationList : BaseDetail[];
    type : BaseDetail;
    prefix : BaseDetail;

    students : User[];
    tutor : User;

    constructor() {
        this.classSpecializationList = [];
        this.students = []; 
    }
}