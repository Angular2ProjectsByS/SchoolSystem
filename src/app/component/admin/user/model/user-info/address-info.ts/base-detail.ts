export class BaseDetail {
    id?: number;
    name?: string;
    creationDate?: Date;

    constructor(name? : string) {
        if (name != null) {
            this.name = name;
        }
    }
}