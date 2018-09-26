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
        
    }

    setup() {
        this.setUpMainModel();
        this.setUpEditModel();
        this.setUpAddModel();
    }

    
    setUpMainModel() {
        console.log("setUpMainModel")
        this.MainModel = new BaseDetailMainModel();
        
        this.MainModel.Title = this.viewMessages.title;
        this.MainModel.DeleteMessageBody = this.viewMessages.delete.title;
        this.MainModel.DeleteOneUrl = this.urls.deleteOne;
        this.MainModel.DeleteTitleModal = this.viewMessages.delete.messageBody;
        this.MainModel.GetOneUrl = this.urls.getOne;
        this.MainModel.LoadingFailureMsg = this.viewMessages.loading.failure;
        this.MainModel.NoDetailsMsg = this.viewMessages.loading.noEntities;
        this.MainModel.DeleteFailureMsg = this.viewMessages.delete.failure;
        this.MainModel.RegistryGetAll = this.urls.registry.getAll;
        this.MainModel.FindUrl = this.urls.find;
    }

    setUpEditModel() {
        console.log("setUpEditModel");
        this.EditModel = new BaseDetailEditModel();
        
        this.EditModel.UpdateFailureMsg = this.viewMessages.update.failure;
        this.EditModel.UpdateSuccessMsg = this.viewMessages.update.success;
        this.EditModel.UpdateUrl = this.urls.update;
    }

    setUpAddModel() {
        console.log("setUpAddModel");
        this.AddModel = new BaseDetailAddModel();
        
        this.AddModel.AddFailureMsg = this.viewMessages.add.failure;
        this.AddModel.AddOneUrl = this.urls.addOne;
        this.AddModel.AddSetUrl = this.urls.addSet;
        this.AddModel.AddSuccesMsg = this.viewMessages.add.success;
        this.AddModel.DetailExistsMsg = this.viewMessages.validation.entityExists;
        this.AddModel.WrongNameFormatMsg = this.viewMessages.validation.wrongFormating;
    }
    
}
