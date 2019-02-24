'use strict'

class vehicle {
    constructor(carModel){
        this.model = carModel;
    };

    getModel() {
        console.log("The model of this vehicle is.." + this.model);
    }
};

var car = new vehicle("Ford Escort");

console.log(car);
car.getModel();