import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    // properties and methods
    name: string;
    totalCapacityKG: number;
    cargoItems: Cargo[];
    astronauts:  Astronaut[];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKG = totalCapacityKg;
        this.cargoItems = [];
        this.astronauts = [];
    }

    sumMass( items: Payload[] ): number {
        let massTotal: number = 0;

        for (let i: number = 0; i < items.length; i++) {
            massTotal += items[i].massKg;
        }

        return massTotal
    }

    currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        if((this.currentMassKg() + item.massKg) < this.totalCapacityKG) return true
        return false;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo)) {
            this.cargoItems.push(cargo)
            return true
        }
        return false
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut)
            return true
        }
        return false
    }



 }