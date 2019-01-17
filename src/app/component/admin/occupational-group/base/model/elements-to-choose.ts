import { BaseDetail } from '@app/model/school-classes/details/base-detail';
import { SchoolClass } from '@app/component/admin/school-class/main/SchoolClass';
import { User } from "@app/component/admin/user/model/user";
import { OnInit } from '@angular/core';

export class ElementsToChoose implements OnInit {

    teachers : User[];
    schoolClasses : SchoolClass[];
    schoolSubjects : BaseDetail[]; 

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}
