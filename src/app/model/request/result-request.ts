export class ResultRequest {
    responseCode: number;
    errorMessage: string;

    setAll(res, success) {
        this.responseCode = res.status;

        if (!success) {
            this.errorMessage = res.json().message;
        }
    }
}