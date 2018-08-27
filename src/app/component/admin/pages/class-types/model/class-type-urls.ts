import { UrlsModel } from "@app/model/urls-model";
import { Constants } from "@app/constants/constants";

export class ClassTypeUrls extends UrlsModel { 

    constructor() {
        super();
        this.setUpMainUrls();
        this.setUpUrls();
    }

    setUpMainUrls() {
        this.mainUrl = Constants.SERVER_PROXY + "/class-type";
        this.registryUrl = Constants.SERVER_PROXY + "/class-type-registry";
    }


}

