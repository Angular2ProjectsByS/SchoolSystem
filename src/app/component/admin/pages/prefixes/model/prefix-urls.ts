import { UrlsModel } from "@app/model/urls-model";
import { Constants } from "@app/constants/constants";

export class PrefixUrls extends UrlsModel {
    constructor() {
        super();
        this.setUpMainUrls();
        this.setUpUrls();
    }

    setUpMainUrls() {
        this.mainUrl = Constants.SERVER_PROXY + "/class-prefixex";
        this.registryUrl = Constants.SERVER_PROXY + "/class-prefix-registry";
    }


}
