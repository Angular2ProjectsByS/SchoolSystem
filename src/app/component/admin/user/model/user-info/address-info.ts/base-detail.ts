export class BaseDetail {
    id: number;
    name: string;
    creationDate: Date;

    constructor(name : string) {
        this.name = name;
    }
}