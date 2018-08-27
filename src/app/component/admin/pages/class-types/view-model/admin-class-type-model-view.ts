import { BaseDetailWrapperModel } from "@app/component/base-detail-wrapper/model/base-detail-wrapper-model";
import { URLS } from "@app/constants/urls";
import { Constants } from "@app/constants/constants";
import { ClassTypeUrls } from "@app/component/admin/pages/class-types/model/class-type-urls";
import { ClassTypeMessageModel } from "@app/component/admin/pages/class-types/model/class-type-message-model";

export class AdminClassTypeModelView extends BaseDetailWrapperModel {

    constructor() {

        super();
        console.log("Ustawim wszystkie modele w msgWrapper");

        this.urls = new ClassTypeUrls();
        this.viewMessages = new ClassTypeMessageModel();

        this.setUpMainModel();
        this.setUpEditModel();
        this.setUpAddModel();

    }

    setUpMainModel() {
        console.log("setUpMainModel")
        this.MainModel.Title = "Typy klas";
        this.MainModel.DeleteMessageBody = "Czy napewno chcesz usunąć typ";
        this.MainModel.DeleteOneUrl = this.urls.deleteOne;
        this.MainModel.DeleteTitleModal = "Usuwanie typu";
        this.MainModel.GetOneUrl = this.urls.getOne;
        this.MainModel.LoadingFailureMsg = Constants.classTypes.loading.failure;
        this.MainModel.NoDetailsMsg = Constants.classTypes.loading.noPrefixes;
        this.MainModel.DeleteFailureMsg = Constants.classTypes.delete.failure; 
        this.MainModel.RegistryGetAll = this.urls.registry.getAll;
        this.MainModel.FindUrl = this.urls.find;
    }

    setUpEditModel() {
        console.log("setUpEditModel");
        this.EditModel.UpdateFailureMsg = Constants.classTypes.update.failure;
        this.EditModel.UpdateSuccessMsg = Constants.classTypes.update.success;
        this.EditModel.UpdateUrl = this.urls.update;
    }

    setUpAddModel() {
        console.log("setUpAddModel");
        this.AddModel.AddFailureMsg = Constants.classTypes.add.failure;
        this.AddModel.AddOneUrl = this.urls.addOne;
        this.AddModel.AddSetUrl = this.urls.addSet;
        this.AddModel.AddSuccesMsg = Constants.classTypes.add.success;
        this.AddModel.DetailExistsMsg = Constants.classTypes.validation.prefixExists;
        this.AddModel.WrongNameFormatMsg = "Typ klasy posiada nieprawidłowy format.";
    }

}
