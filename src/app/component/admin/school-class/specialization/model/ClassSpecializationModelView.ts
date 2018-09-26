
import { BaseDetailWrapperModel } from '@app/component/base-detail-wrapper/model/base-detail-wrapper-model';
import { ClassSpecializationViewMessages } from '@app/component/admin/school-class/specialization/model/ClassSpecializationViewMessages';
import { ClassSpecializationUrls } from '@app/component/admin/school-class/specialization/model/ClassSpecializationUrls';

export class ClassSpecializationModelView extends BaseDetailWrapperModel {

    constructor() {
        super();
        this.viewMessages = new ClassSpecializationViewMessages();
        this.urls = new ClassSpecializationUrls();
        this.setup();
    }

  

}