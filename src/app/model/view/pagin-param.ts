export class PaginParam {
    limit: number;
    offset: number;

    constructor(limit, offset) {
        this.limit = limit;
        this.offset = offset;
    }
}