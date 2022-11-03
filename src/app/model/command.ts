import { Plat } from "./Plat";

export interface Command {
    products : Plat[];
    total : number;
    status : string;
    id : string;
    table : number;
}
