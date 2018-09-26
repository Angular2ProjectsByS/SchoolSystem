
import { URLS } from "@app/constants/urls";
import { Constants } from "@app/constants/constants";
import { BaseDetailWrapperModel } from "@app/component/base-detail-wrapper/model/base-detail-wrapper-model";
import { PrefixViewMessages } from "@app/component/admin/pages/prefixes/model/prefix-view-messages";
import { PrefixUrls } from "@app/component/admin/pages/prefixes/model/prefix-urls";

export class AdminPrefixModelView extends BaseDetailWrapperModel {

    constructor() {
        console.log("Ustawim wszystkie modele w msgWrapper");
        super();
        this.viewMessages = new PrefixViewMessages();
        this.urls = new PrefixUrls();
        this.setup();
    }


}
