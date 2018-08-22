import { Constants } from "@app/constants/constants";

export class URLS {
    static prefixes = {
        getOne : Constants.SCH_PREFIX_PREFIX_URL + "/get",
        getAll : Constants.SCH_PREFIX_PREFIX_URL + "/get/all",
        deleteOne : Constants.SCH_PREFIX_PREFIX_URL + "/delete",
        addSet : Constants.SCH_PREFIX_PREFIX_URL + "/add-set",
        addOne: Constants.SCH_PREFIX_PREFIX_URL + "/add",
        update: Constants.SCH_PREFIX_PREFIX_URL + "/update",
        count: Constants.SCH_PREFIX_PREFIX_URL + "/count",
        find: Constants.SCH_PREFIX_PREFIX_URL + "/find",
        registry: {
            getAll: Constants.SCH_PREFIX_REGISTRY_PREFIX_URL + "/get"
        }
    }
}