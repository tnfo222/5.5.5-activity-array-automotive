//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,mileage);
        this.maximumPassengers = 2;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if ((num + this.passenger) <= this.maximumPassengers) {
                this.passenger = num;
                return this.passenger;               
            } 
            else {
                console.log(this.model + " " + this.make + " does not have enough seats for specified number of passengers.");
            }
        } 
        else {
            console.log(this.model + " " + this.make + " has reached maximum seat occupancy.");
        }
    }

    start(){
        if (this.fuel > 0){
           console.log("The engine has started.");
           return this.started = true; 
        }
        else{
            console.log("The engine has not started. Out of fuel!");
            return this.started =  false;
        }
    }

    service(){
        if (this.mileage > 30000){
            console.log("It is time for a maintenance checkup!");
            return this.scheduleService = true;
        }
        else {
            console.log("No maintenance required at this time.");
            return this.scheduleService = false;
        }
    }
}

//this shows how to call from this module...
let myCar = new Car ("Nissan", "350z", "2006", "Pearl White", 170000);

myCar.loadPassenger(2);
myCar.start();
myCar.service();

console.log(myCar);