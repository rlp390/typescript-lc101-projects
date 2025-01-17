// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

import { SpaceLocation } from "./SpaceLocation"

//let spacecraftName: string = "Determination";
//let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
//let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars

//let milesToMars: number = kilometersToMars*milesPerKilometer;
//let hoursToMars: number = milesToMars/speedMph;
//let daysToMars: number = hoursToMars/24;

// Code an output statement here (use a template literal):

//console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToMars)} days to reach the martian planet!`);
//console.log(`${spacecraftName} will take ${getDaysToLocation(kilometersToTheMoon)} days to reach the lunar surface!`);

// Part 3: Create a Function ("getDaysToLocation")

//function getDaysToLocation(distance: number): number {
//    return ((distance*milesPerKilometer)/speedMph)/24;
//}

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.




// Part 4: Create a Spacecraft Class

class spaceCraft {
    milesPerKilometer: number = 0.621;
    name: string;
    speedMPH: number;

    constructor(name: string, speed: number) {
        this.name=name;
        this.speedMPH=speed;
    }

    getDaysToLocation(distance: number): number {
        return ((distance*this.milesPerKilometer)/this.speedMPH)/24;
    }

    printDaysToLocation(location: SpaceLocation) {
        console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
     }
}


// Create an instance of the class here:

let spaceSkittles = new spaceCraft("Determination", 17500);


// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

//console.log(`${spaceSkittles.name} will take ${spaceSkittles.getDaysToLocation(kilometersToMars)} days to reach the martian planet!`);
//console.log(`${spaceSkittles.name} will take ${spaceSkittles.getDaysToLocation(kilometersToTheMoon)} days to reach the lunar surface!`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.

spaceSkittles.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceSkittles.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
