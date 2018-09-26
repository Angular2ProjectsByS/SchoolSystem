import { BaseDetailWrapperModel } from "@app/component/base-detail-wrapper/model/base-detail-wrapper-model";
import { URLS } from "@app/constants/urls";
import { Constants } from "@app/constants/constants";
import { ClassTypeUrls } from "@app/component/admin/pages/class-types/model/class-type-urls";
import { ClassTypeMessageModel } from "@app/component/admin/pages/class-types/model/class-type-message-model";

export class AdminClassTypeModelView extends BaseDetailWrapperModel {

    constructor() {

        super();
        
        this.urls = new ClassTypeUrls();
        this.viewMessages = new ClassTypeMessageModel();

        this.setup();
    }

}
