export class BaseDetail {
    id?: number = 0;
    name?: string;
    creationDate?: Date;

    constructor(name? : string) {
        if (name != null) {
            this.name = name;
        }
    }
}