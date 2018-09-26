export class ViewMessageModel {
    title = "";
    loading = {
        failure : "",
        noEntities: ""
    };
    delete = {
        failure : "",
        title : "",
        messageBody: ""
    };
    add = {
        success: "",
        failure: "",
    };
    validation = {
        entityExists: "",
        failure: "",
        wrongFormating : ""
    };
    update = {
        success: "",
        failure: ""
    }
}