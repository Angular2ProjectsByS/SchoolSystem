
import { URLS } from "@app/constants/urls";
import { Constants } from "@app/constants/constants";
import { BaseDetailWrapperModel } from "@app/component/base-detail-wrapper/model/base-detail-wrapper-model";

export class AdminPrefixModelView extends BaseDetailWrapperModel {

    constructor() {

        super();
        console.log("Ustawim wszystkie modele w msgWrapper");
        this.setUpMainModel();
        this.setUpEditModel();
        this.setUpAddModel();

    }

    setUpMainModel() {
        console.log("setUpMainModel")
        this.MainModel.Title = "Prefiksy";
        this.MainModel.DeleteMessageBody = "Czy napewno chcesz usunąć prefix";
        this.MainModel.DeleteOneUrl = URLS.prefixes.deleteOne;
        this.MainModel.DeleteTitleModal = "Usuwanie prefiksu";
        this.MainModel.GetOneUrl = URLS.prefixes.getOne;
        this.MainModel.LoadingFailureMsg = Constants.prefixes.loading.failure;
        this.MainModel.NoDetailsMsg = Constants.prefixes.loading.noPrefixes;
        this.MainModel.DeleteFailureMsg = Constants.prefixes.delete.failure;
        this.MainModel.RegistryGetAll = URLS.prefixes.registry.getAll;
        this.MainModel.FindUrl = URLS.prefixes.find;
    }

    setUpEditModel() {
        console.log("setUpEditModel");
        this.EditModel.UpdateFailureMsg = Constants.prefixes.update.failure;
        this.EditModel.UpdateSuccessMsg = Constants.prefixes.update.success;
        this.EditModel.UpdateUrl = URLS.prefixes.update;
    }

    setUpAddModel() {
        console.log("setUpAddModel");
        this.AddModel.AddFailureMsg = Constants.prefixes.add.failure;
        this.AddModel.AddOneUrl = URLS.prefixes.addOne;
        this.AddModel.AddSetUrl = URLS.prefixes.addSet;
        this.AddModel.AddSuccesMsg = Constants.prefixes.add.success;
        this.AddModel.DetailExistsMsg = Constants.prefixes.validation.prefixExists;
        this.AddModel.WrongNameFormatMsg = "Nazwa prefiksu posiada nieprawidłowy format.";
    }

}
