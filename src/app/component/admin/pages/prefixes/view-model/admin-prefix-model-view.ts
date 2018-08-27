
import { URLS } from "@app/constants/urls";
import { Constants } from "@app/constants/constants";
import { BaseDetailWrapperModel } from "@app/component/base-detail-wrapper/model/base-detail-wrapper-model";
import { PrefixViewMessages } from "@app/component/admin/pages/prefixes/model/prefix-view-messages";
import { PrefixUrls } from "@app/component/admin/pages/prefixes/model/prefix-urls";

export class AdminPrefixModelView extends BaseDetailWrapperModel {

    constructor() {

        super();
        console.log("Ustawim wszystkie modele w msgWrapper");

        this.viewMessages = new PrefixViewMessages();
        this.urls = new PrefixUrls();

        this.setUpMainModel();
        this.setUpEditModel();
        this.setUpAddModel();

    }

    setUpMainModel() {
        console.log("setUpMainModel")
        this.MainModel.Title = "Prefiksy";
        this.MainModel.DeleteMessageBody = "Czy napewno chcesz usunąć prefix";
        this.MainModel.DeleteOneUrl = this.urls.deleteOne;
        this.MainModel.DeleteTitleModal = "Usuwanie prefiksu";
        this.MainModel.GetOneUrl = this.urls.getOne;
        this.MainModel.LoadingFailureMsg = this.viewMessages.loading.failure;
        this.MainModel.NoDetailsMsg = this.viewMessages.loading.noPrefixes;
        this.MainModel.DeleteFailureMsg = this.viewMessages.delete.failure;
        this.MainModel.RegistryGetAll = this.urls.registry.getAll;
        this.MainModel.FindUrl = this.urls.find;
    }

    setUpEditModel() {
        console.log("setUpEditModel");
        this.EditModel.UpdateFailureMsg = this.viewMessages.update.failure;
        this.EditModel.UpdateSuccessMsg = this.viewMessages.update.success;
        this.EditModel.UpdateUrl = this.urls.update;
    }

    setUpAddModel() {
        console.log("setUpAddModel");
        this.AddModel.AddFailureMsg = this.viewMessages.add.failure;
        this.AddModel.AddOneUrl = this.urls.addOne;
        this.AddModel.AddSetUrl = this.urls.addSet;
        this.AddModel.AddSuccesMsg = this.viewMessages.add.success;
        this.AddModel.DetailExistsMsg = this.viewMessages.validation.prefixExists;
        this.AddModel.WrongNameFormatMsg = "Nazwa prefiksu posiada nieprawidłowy format.";
    }

}
