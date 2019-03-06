'use strict'

class FoodItem {
    constuctor(dishId){
        this._dishId = dishId;
    }
    get DishId() {return this._dishId;}
}

class ColdPrep {
    PrepDish(dishId){
        return new FoodItem(dishId);
        }
    }

class HotPrep {
    PrepDish(dishId){
        return new FoodItem(dishId);
        }
    }
class Bar {
    PrepDish(dishId){
        return new FoodItem(dishId);
        }
    }

class Order {
    constructor(appetizer, entree, drink){
        this._appetizer = appetizer;
        this._entree = entree;
        this._drink = drink;
    }

    get Appetizer() { return this._appetizer;}

    get Entree() { return _entree; }

    get Drink() { return _drink; }
}

class Patron {
    constructor(name) {
        this._name = name;
    }

    get Name() {return this._name;}
}

class Server {
    constructor() {
        this._coldPrep = new ColdPrep();
        this._hotPrrep = new HotPrep();
        this._bar = new Bar();
    }

    PlaceOrder(patron, coldAppId, hotEntreeId, drinkId)
    {
        console.log(patron.Name + " places order for cold app #" + coldAppId +
                                    ", hot entree #" + hotEntreeId +
                                    ", drink #" + drinkId + ". ");
        return new Order(this._coldPrep.PrepDish(coldAppId),
                         this._hotPrrep.PrepDish(hotEntreeId),
                         this._bar.PrepDish(drinkId));
    }
}

var server = new Server();

//import readline from 'readline-sync';

//var patronName = readline.question("What is you name?");
//var patron = new Patron(patronName);
//var appId = readline.question("Hello " + patron.Name + ". What appetizer would you like? (1-15):");
//var entreeId = readline.question("That's a good one.  What entree would you like? (1-20):");
//var drinkId = readline.question("A great choice!  Finally, what drink would you like? (1-60):");

var patron = new Patron("Carl");
var appId = 1;
var entreeId = 2;
var drinkId = 3;

console.log("I'll get that order in right away.")

server.PlaceOrder(patron, appId, entreeId, drinkId);