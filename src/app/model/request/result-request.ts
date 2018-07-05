export class ResultRequest {
    success: boolean;
    responseCode: number;

    setAll(code, success) {
        this.responseCode = code;
        this.success = success;
    }
}