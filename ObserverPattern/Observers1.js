'use strict'

class Restaurants {
    constructor() {
        this._restaurantList = [];
    }
}

class Veggies {
    constructor(pricePerPound) {
        this._restaurants = new Restaurants();
        this._pricePerPound = pricePerPound;
    }

    Attach(restaurant) {
        this._restaurants._restaurantList.push(restaurant);
    }
    Detach(restaurant) {
        this._restaurants._restaurantList.pop(restaurant);
    }
    Notify() {
        this._restaurants._restaurantList.forEach(element => {
            element.Update(this);
        });
    }
    get PricePerPound() {
        return this._pricePerPound;
    }
    set PricePerPound(pricePerPound) {
        if (this._pricePerPound === pricePerPound)
            return;
        this._pricePerPound = pricePerPound;
        this.Notify();
    }
}

var veggieModule = (function() {
    var _restaurants =  [];
    var _pricePerPound = 0.0;
    var _veggieName = '';

    function attach(restaurant){
        _restaurants.push(Restaurant);
    }
    function notify(){
        _restaurants.forEach(element => {
            element.Update1(_pricePerPound, _veggieName);
            });
        }
    var setPricePound = function(pricePerPound) {
        if (_pricePerPound === pricePerPound)
            return;
        _pricePerPound = pricePerPound;
        notify();
    }

    return {
            Init: function(pricePerPound, veggieName){
                _pricePerPound = pricePerPound;
                _veggieName = veggieName;
            },
            GetPricePerPound: function(){ return _pricePerPound;},

            // SetPricePerPound: function(pricePerPound) {
            //     if (_pricePerPound === pricePerPound)
            //         return;
            //     _pricePerPound = pricePerPound;
            //     notify();
            // },
            SetPricePerPound: setPricePound,
            Attach: function(restaurant){
                _restaurants.push(restaurant);
            }
        };
})();

class Carrots extends Veggies{
    constructor(pricePerPound){
        super(pricePerPound);
    }
}

// function Carrot(pricePerPound){
//     return new Veggies(pricePerPound);
// }
// function Restaurant(name, purchaseThreshold){
//     this._name = name;
//     this._purchaseThreshold = purchaseThreshold;
//     this.Update = function(veggie) {
//         console.log('Notify ' + this._name + ' of carrots ' + 'price change to ' + veggie.GetPricePerPound());
//         if(veggie.GetPricePerPound() < this._purchaseThreshold)
//         {
//             console.log(this._name + ' wants to buy some carrots' + '!');
//         }
//     };
// }
class Restaurant {
    constructor(name, purchaseThreshold) {
        this._name = name;
        this._purchaseThreshold = purchaseThreshold;
        this.Update = function (veggie) {
            console.log('Notify ' + this._name + ' of ' + veggie.constructor.name + ' price change to ' + veggie.PricePerPound);
            if (veggie.PricePerPound < this._purchaseThreshold) {
                console.log(this._name + ' wants to buy some ' + veggie.constructor.name + '!');
            }
        };
        this.Update1 = function (pricePerPound, veggieName) {
            console.log('Notify ' + this._name + ' of ' + veggieName + ' price change to ' + pricePerPound);
            if (pricePerPound < this._purchaseThreshold) {
                console.log(this._name + ' wants to buy some ' + veggieName + '!');
            }
        };
    }
}

var carrots = new Carrots(0.82);
console.log(carrots._pricePerPound);
carrots.Attach(new Restaurant("Mackay's", 0.77));
carrots.Attach(new Restaurant("Johnny's Sports Bar", 0.74));
carrots.Attach(new Restaurant("Salad Kindom", 0.75));

carrots.PricePerPound = 0.79;
carrots.PricePerPound = 0.76;
carrots.PricePerPound = 0.74;
carrots.PricePerPound = 0.81;
console.log("=========================================");

var carrots1 = veggieModule;
carrots1.Init(0.82, "Carrots");
console.log(carrots1.GetPricePerPound());

carrots1.Attach(new Restaurant("Mackay's", 0.77));
carrots1.Attach(new Restaurant("Johnny's Sports Bar", 0.74));
carrots1.Attach(new Restaurant("Salad Kindom", 0.75));

carrots1.SetPricePerPound(0.79);
carrots1.SetPricePerPound(0.76);
carrots1.SetPricePerPound(0.74);
carrots1.SetPricePerPound(0.81);
console.log("=========================================");
console.log(carrots1._pricePerPound);