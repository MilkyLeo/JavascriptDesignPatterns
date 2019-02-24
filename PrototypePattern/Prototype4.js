'use strict'

// var vehiclePrototype = {
//     init: function(carModel){
//         this.model = carModel;
//     },

//     getModel: function() {
//         console.log("The model of this vehicle is.. " + this.model);
//     }
// };
class vehiclePrototype {
    constructor(carModel){
        this.model = carModel;
    };

    getModel() {
        console.log("The model of this vehicle is.." + this.model);
    }
};

var assignProtoType = (function(){
    
    function F() {}

    return function (protoType) {
        F.prototype = protoType;
        return new F();
    };
})();

function vehicle(model)
{
    //vehiclePrototype.init(model);
    //return assignProtoType(vehiclePrototype);
  
    return assignProtoType(new vehiclePrototype(model));
}

var fordCar = vehicle("Ford Escort");
fordCar.getModel();

var toyotaCar = vehicle("Toyota Camry");
toyotaCar.getModel();