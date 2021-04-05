import { Payload } from "./Payload";

export class Astronaut implements Payload {
    // properties and methods
    massKg: number;
    name: string;

    constructor(massKG: number, name: string) {
        this.massKg = massKG;
        this.name = name;
    }
 }