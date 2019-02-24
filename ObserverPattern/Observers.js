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