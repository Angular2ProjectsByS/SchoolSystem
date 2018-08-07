import { PrefixHistory } from "@app/model/school-classes/details/prefix-history";

export class Prefix {
    id: number;
    name: string;
    creationDate: Date;
    prefixHistory: PrefixHistory[];
}