import { BaseDetailAddModel } from "@app/component/base-detail-wrapper/model/base-detail-add-model";
import { BaseDetailEditModel } from "@app/component/base-detail-wrapper/model/base-detail-edit-model";
import { BaseDetailMainModel } from "@app/component/base-detail-wrapper/model/base-detail-main-model";
import { UrlsModel } from "@app/model/urls-model";
import { ViewMessageModel } from "@app/model/view/view-messages-model";


export class BaseDetailWrapperModel {

    urls : UrlsModel;
    viewMessages : ViewMessageModel;

    AddModel : BaseDetailAddModel;
    EditModel : BaseDetailEditModel;
    MainModel : BaseDetailMainModel;

    constructor() {
        this.AddModel = new BaseDetailAddModel();
        this.EditModel = new BaseDetailEditModel();
        this.MainModel = new BaseDetailMainModel();
    }
    
}
