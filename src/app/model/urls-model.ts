export class UrlsModel {
    
    mainUrl : string; 
    registryUrl : string;

    getOne : string;
    getAll : string;
    deleteOne : string;
    addSet : string;
    addOne: string;
    update: string;
    count: string;
    find: string;

    registry =  {
            getAll: ""
    }

    protected setUpUrls() {

        this.getOne = this.mainUrl + "/get",
        this.getAll = this.mainUrl + "/get/all",
        this.deleteOne = this.mainUrl + "/delete",
        this.addSet = this.mainUrl + "/add-set",
        this.addOne = this.mainUrl + "/add",
        this.update = this.mainUrl + "/update",
        this.count = this.mainUrl + "/count",
        this.find = this.mainUrl + "/find",
        
        this.registry = {
            getAll: this.registryUrl + "/get"
        }

    }
}