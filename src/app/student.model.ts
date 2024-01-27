import { Absence } from "./absence.model";

export class Student {
    id: number;
    name?: string;
    address: string;
    phone: number;
    active: boolean;
    avgMark: number;
    maslul?:maslul;
    yearl?:LearnYear;
    absence?:Absence[];
    constructor(name:string){
        this.id=0;
        this.name=name;
    }
}
export enum LearnYear{'year1','year2','year3'};
export class maslul{
    id:number;
    name:string;
}
export const MASLUL:maslul[]=[{id:1,name:"yahadut"},{id:2,name:"tichnut"},{id:3,name:"math"}];
