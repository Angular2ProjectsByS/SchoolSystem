import { BaseDetailHistory } from "@app/model/school-classes/details/base-datail-history";

export class BaseDetail {
    id: number;
    name: string;
    creationDate: Date;
    detailHistory: BaseDetailHistory;
    historyLoadError: string;
}