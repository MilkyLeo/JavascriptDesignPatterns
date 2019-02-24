'use strict'

class Restaurants {
    constructor() {
        this._restaurantList = [];
    }
}

var veggie = function(pricePerPound, veggieName) {
    var _restaurants =  [];
    var _pricePerPound = pricePerPound;
    var _veggieName = veggieName;

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
            GetPricePerPound: function(){ return _pricePerPound;},

            SetPricePerPound: setPricePound,
            Attach: function(restaurant){
                _restaurants.push(restaurant);
            }
        };
};


class Restaurant {
    constructor(name, purchaseThreshold) {
        this._name = name;
        this._purchaseThreshold = purchaseThreshold;

        this.Update1 = function (pricePerPound, veggieName) {
            console.log('Notify ' + this._name + ' of ' + veggieName + ' price change to ' + pricePerPound);
            if (pricePerPound < this._purchaseThreshold) {
                console.log(this._name + ' wants to buy some ' + veggieName + '!');
            }
        };
    }
}

var carrots = (veggie(0.82, "Carrots"));
//carrots1.Init(0.82, "Carrots");
console.log(carrots.GetPricePerPound());

carrots.Attach(new Restaurant("Mackay's", 0.77));
carrots.Attach(new Restaurant("Johnny's Sports Bar", 0.74));
carrots.Attach(new Restaurant("Salad Kindom", 0.75));

carrots.SetPricePerPound(0.79);
carrots.SetPricePerPound(0.76);
carrots.SetPricePerPound(0.74);
carrots.SetPricePerPound(0.81);
console.log("=========================================");
console.log(carrots._pricePerPound);